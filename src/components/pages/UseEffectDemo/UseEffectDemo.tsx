import React, {useState, useEffect, useRef} from 'react'

// hooks
import {useStateWithLabel} from 'hooks'

// services
import {CustomerService} from 'services'

// components
import {Button, Modal} from 'components'

// constants
import {userGreg} from 'constant'

// types
import {ICleanedUser} from 'types'

interface IUseEffectDemoProps {
    userId?: string
}

// primary component
export const UseEffectDemo: React.FC<IUseEffectDemoProps> = ({userId}) => {
    // refs
    const descriptionRef = useRef<HTMLParagraphElement>(null)

    // local state
    const [isModalOpen, setIsModalOpen] = useStateWithLabel(false, 'Modal Is Open')
    const [isFetchUserLoading, setIsFetchUserLoading] = useStateWithLabel(false, 'User Call Loading')
    const [user, setUser] = useState<ICleanedUser | undefined>()

    // effects

    // This effect runs on every render and updates the document's title
    useEffect(() => {
        console.log('Document title effect fired.')
        document.title = user?.name ?? 'Hooked on React'
    })

    // This effect fetches user data on initial render and if the userId prop changes.
    // Be careful that asynchronous calls don't set state after unmounting...
    useEffect(() => {
        console.log('Fetch user effect fired.')

        if (userId) {
            setIsFetchUserLoading(true)
            setIsModalOpen(true)

            CustomerService.fetchCleanedUserDetails(userId).then((user: ICleanedUser) => {
                console.log('Fetch complete - attempting to set user state...')
                setUser(user)
                setIsFetchUserLoading(false)
            })
        }
    }, [setIsFetchUserLoading, setIsModalOpen, userId])

    // Bonus silly effect - this demonstrates how we can use the useRef hook
    // to interact with DOM elements directly. Most commonly used for managing
    // focus states. Uncomment out the lines below to see this effect in action.
    // useEffect(() => {
    //     if (!isModalOpen && user && descriptionRef?.current) {
    //         alert(descriptionRef.current.innerHTML)
    //     }
    // }, [isModalOpen, user])

    return (
        <div>
            <h1>UseEffect Demo</h1>

            <p ref={descriptionRef}>
                Extends our UseStateDemo components to include side effects. This component updates the page title (look
                at the browser tab) as the user in state changes. It also immediately fetches a user's details on mount
                and manages the call's loading state.
            </p>

            <hr />

            <p>{user ? `You are logged in as: ${user.name}` : 'Welcome!'}</p>

            <Button
                onClick={() => {
                    setIsModalOpen(true)
                    setUser(prevUser => (prevUser ? undefined : userGreg))
                }}
            >
                {user ? 'Log Off' : 'Log In As Greg'}
            </Button>

            <Modal
                isOpen={isModalOpen}
                closeModal={() => {
                    setIsModalOpen(false)
                }}
            >
                {isFetchUserLoading ? 'Loading...' : user ? `You're now logged in` : 'Successfully logged off'}.
            </Modal>
        </div>
    )
}
