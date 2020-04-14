import React, {useContext} from 'react'
import {DemoContext} from './DemoContext'

// components
import {Button} from 'components'

// constants
import {userGreg} from 'constant'

// types
export interface ILoginButtonProps {}

// primary component
export const LoginButton: React.FC<ILoginButtonProps> = props => {
    // context
    const {context, dispatch} = useContext(DemoContext)
    const {user} = context

    return (
        <Button
            onClick={() =>
                user ? dispatch({type: 'logOff'}) : dispatch({type: 'fastLogin', payload: {user: userGreg}})
            }
        >
            {user ? 'Log Off' : 'Log In As Greg'}
        </Button>
    )
}
