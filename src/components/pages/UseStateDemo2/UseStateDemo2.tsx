import React, {useState} from 'react'

// hooks
import {useStateWithLabel} from 'hooks'

// services
import {CustomerService} from 'services'

// components
import {Button, Modal} from 'components'

// constants
import {userGreg} from 'constant'

// types
import {IRawUser} from 'types'

interface IUseStateDemoProps {
    rawUser?: IRawUser
}

// primary component
export const UseStateDemo2: React.FC<IUseStateDemoProps> = ({rawUser}) => {
    // Custom state hook to provide a label in react dev tools
    const [isModalOpen, setIsModalOpen] = useStateWithLabel(false, 'Modal Is Open')

    // Complex data transform is expensive to run, use lazy initialization to
    // ensure it only runs on the first render.
    const [user, setUser] = useState(() => {
        return rawUser ? CustomerService.doComplicatedDataTransform(rawUser) : undefined
    })

    return (
        <div>
            <h1>UseState Demo 2</h1>

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
