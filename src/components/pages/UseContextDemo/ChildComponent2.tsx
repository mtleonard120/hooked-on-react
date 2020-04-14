import React, {useContext} from 'react'
import {DemoContext} from './DemoContext'

// components
import {LoginButton} from './LoginButton'

// types
export interface IChildComponent2Props {}

// primary component
export const ChildComponent2: React.FC<IChildComponent2Props> = props => {
    // context
    const {context} = useContext(DemoContext)

    return (
        <div style={{border: '2px solid green', padding: 15}}>
            <p>I'm a grandchild component!</p>

            <p>The current user's name is: {context.user?.name ?? 'ANONYMOUS'}</p>

            <LoginButton />
        </div>
    )
}
