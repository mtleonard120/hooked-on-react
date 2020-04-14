import React, {useEffect, useReducer} from 'react'

// services
import {CustomerService} from 'services'

// components
import {Button, Modal} from 'components'

// constants
import {userGreg} from 'constant'

// types
import {ICleanedUser} from 'types'

interface IUseReducerDemoProps {
    userId?: string
}

interface IUseReducerDemoState {
    isModalOpen: boolean
    isFetchUserLoading: boolean
    user?: ICleanedUser
}

// reducer
interface IAction {
    type: 'fetchUser' | 'fetchComplete' | 'closeModal' | 'fastLogin' | 'logOff'
    payload?: {
        user?: ICleanedUser
        isModalOpen?: boolean
    }
}

const reducer = (state: IUseReducerDemoState, action: IAction) => {
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

const initialState: IUseReducerDemoState = {
    isModalOpen: false,
    isFetchUserLoading: false,
    user: undefined,
}

// primary component
export const UseReducerDemo: React.SFC<IUseReducerDemoProps> = ({userId}) => {
    // local state
    const [{isModalOpen, isFetchUserLoading, user}, dispatch] = useReducer(reducer, initialState)

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
        <div>
            <h1>UseReducer Demo</h1>

            <p>Extends our UseEffectDemo component to handle state and its mutations via a reducer.</p>

            <hr />

            <p>{user ? `You are logged in as: ${user.name}` : 'Welcome!'}</p>

            <Button
                onClick={() =>
                    user ? dispatch({type: 'logOff'}) : dispatch({type: 'fastLogin', payload: {user: userGreg}})
                }
            >
                {user ? 'Log Off' : 'Log In As Greg'}
            </Button>

            <Modal isOpen={isModalOpen} closeModal={() => dispatch({type: 'closeModal'})}>
                {isFetchUserLoading ? 'Loading...' : user ? `You're now logged in` : 'Successfully logged off'}.
            </Modal>
        </div>
    )
}
