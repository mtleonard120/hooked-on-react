import React, {useState} from 'react'

// packages

// hooks

// components
import {Button, Modal} from 'components'

// styles
// import styles from "./UseStateDemo.module.scss";

// utils

// types
export interface IUseStateDemoProps {}

interface IUser {
    name: string
    cell?: number
}

// constants
const userGreg: IUser = {
    name: 'Greg',
    cell: 5555555555,
}

// primary component
export const UseStateDemo: React.FC<IUseStateDemoProps> = props => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [user, setUser] = useState<IUser | undefined>()

    return (
        <div>
            <p>{user ? `You are logged in as: ${user.name}` : 'Welcome!'}</p>

            <Button
                onClick={() => {
                    setIsModalOpen(true)
                    setUser(prevUser => (prevUser ? undefined : userGreg))
                }}
            >
                {user ? 'Log Off' : 'Log In'}
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
