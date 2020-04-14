import React from 'react'

// components
import {ChildComponent2} from 'components'

// types
export interface IChildComponentProps {}

// primary component
export const ChildComponent: React.FC<IChildComponentProps> = props => {
    return (
        <div style={{border: '2px solid black', padding: 15, marginTop: 15}}>
            <p>I'm a child component</p>

            <ChildComponent2 />
        </div>
    )
}
