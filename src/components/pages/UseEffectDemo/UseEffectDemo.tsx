import React, {useState, useEffect} from 'react'

// hooks
import {useStateWithLabel} from 'hooks'

// services
// import {CustomerService} from 'services'

// components
import {Button, Modal} from 'components'

// constants
import {userGreg} from 'constant'

// types
import {ICleanedUser} from 'types'
import {CustomerService} from 'services'

interface IUseEffectDemoProps {
    userId?: string
}

// primary component
export const UseEffectDemo: React.FC<IUseEffectDemoProps> = ({userId}) => {
    const [isModalOpen, setIsModalOpen] = useStateWithLabel(false, 'Modal Is Open')
    const [user, setUser] = useState<ICleanedUser | undefined>()

    // This effect runs on every render and updates the document's title
    useEffect(() => {
        console.log('Document title effect fired.')
        document.title = user?.name ?? 'Hooked on React'
    })

    // This effect fetches user data
    useEffect(() => {
        console.log('Fetch user effect fired.')
        if (userId) {
            CustomerService.fetchCleanedUserDetails(userId, (user: ICleanedUser) => setUser(user))
        }
    })

    return (
        <div>
            <h1>UseEffect Demo</h1>

            <p>Slightly more realistic take on the same component as shown in UseState Demo 1.</p>

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
                {user ? `You're now logged in` : 'Successfully logged off'}.
            </Modal>
        </div>
    )
}
