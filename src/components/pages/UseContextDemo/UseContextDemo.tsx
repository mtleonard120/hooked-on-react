import React, {useEffect, useReducer} from 'react'
import {DemoContext} from './DemoContext'

// services
import {CustomerService} from 'services'

// components
import {ChildComponent, LoginButton, Modal} from 'components'

// types
import {ICleanedUser} from 'types'

interface IUseContextDemoProps {
    userId?: string
}

export interface IUseContextDemoState {
    isModalOpen: boolean
    isFetchUserLoading: boolean
    user?: ICleanedUser
}

// reducer
export interface IAction {
    type: 'fetchUser' | 'fetchComplete' | 'closeModal' | 'fastLogin' | 'logOff'
    payload?: {
        user?: ICleanedUser
        isModalOpen?: boolean
    }
}

const reducer = (state: IUseContextDemoState, action: IAction) => {
    switch (action.type) {
        case 'fastLogin':
            return {...state, isModalOpen: true, user: action.payload?.user}
        case 'fetchUser':
            return {...state, isModalOpen: true, isFetchUserLoading: true}
        case 'fetchComplete':
            return {...state, isFetchUserLoading: false, user: action.payload?.user}
        case 'logOff':
            return {...state, isModalOpen: true, user: undefined}
        case 'closeModal':
            return {...state, isModalOpen: false}
        default:
            return state
    }
}

export const initialState: IUseContextDemoState = {
    isModalOpen: false,
    isFetchUserLoading: false,
    user: undefined,
}

// primary component
export const UseContextDemo: React.SFC<IUseContextDemoProps> = ({userId}) => {
    // local state
    const [context, dispatch] = useReducer(reducer, initialState)
    const {isModalOpen, isFetchUserLoading, user} = context

    // effects

    // This effect runs on every render and updates the document's title
    useEffect(() => {
        console.log('Document title effect fired.')
        document.title = user?.name ?? 'Hooked on React'
    })

    // This effect fetches user data on initial render and if the userId prop changes.
    // Notice dispatch does not need to be included in dep array - it's already memoized.
    useEffect(() => {
        console.log('Fetch user effect fired.')

        let isCurrent = true

        if (userId) {
            dispatch({type: 'fetchUser'})

            CustomerService.fetchCleanedUserDetails(userId).then((user: ICleanedUser) => {
                console.log('Fetch complete - attempting to set user state...')

                if (isCurrent) {
                    dispatch({type: 'fetchComplete', payload: {user}})
                }
            })
        }

        return () => {
            isCurrent = false
        }
    }, [userId])

    return (
        <DemoContext.Provider value={{context, dispatch}}>
            <div>
                <h1>UseContext Demo</h1>

                <p>Extends our UseReducerDemo component to pass state and dispatch down in context.</p>

                <hr />

                <p>{user ? `You are logged in as: ${user.name}` : 'Welcome!'}</p>

                <LoginButton />

                <ChildComponent />

                <Modal isOpen={isModalOpen} closeModal={() => dispatch({type: 'closeModal'})}>
                    {isFetchUserLoading ? 'Loading...' : user ? `You're now logged in` : 'Successfully logged off'}.
                </Modal>
            </div>
        </DemoContext.Provider>
    )
}
