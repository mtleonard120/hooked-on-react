import React, {useState} from 'react'

// components
import {Button, Modal} from 'components'

// types
interface IUseStateDemoProps {}

// primary component
export const UseStateDemo1: React.FC<IUseStateDemoProps> = props => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const [userCell, setUserCell] = useState('')

    return (
        <div>
            <h1>UseState Demo 1</h1>

            <p>A very basic demonstration of how state is used and manipulated.</p>

            <hr />

            <p>{userName ? `Hi ${userName}, your cell number is ${userCell}.` : 'Welcome!'}</p>

            <Button
                onClick={() => {
                    setIsModalOpen(true)

                    if (userName) {
                        setUserName('')
                        setUserCell('')
                    } else {
                        setUserName('Greg')
                        setUserCell('555-555-5555')
                    }
                }}
            >
                {userName ? 'Log Off' : 'Log In As Greg'}
            </Button>

            <Modal
                isOpen={isModalOpen}
                closeModal={() => {
                    setIsModalOpen(false)
                }}
            >
                {userName ? `You're now logged in` : 'Successfully logged off'}.
            </Modal>
        </div>
    )
}
