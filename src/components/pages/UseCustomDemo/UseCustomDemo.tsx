import React from 'react'

// hooks
import {useLocalStorage} from '../../../hooks/useLocalStorage'

// components
import {Button} from 'components'

// types
export interface IUseCustomDemoProps {}

// primary component
export const UseCustomDemo: React.FC<IUseCustomDemoProps> = props => {
    const [val, setVal, clearStorage] = useLocalStorage('inputVal', '')

    return (
        <>
            <h1>Custom Hook Demo</h1>

            <p>
                This component showcases an extension of useState, which we call useLocalStorage. This hook works
                similarly to useState, but allows us to persist state values in localstorage, so we can freely refresh
                the page or switch back and forth on pages without losing our state value. It also exposes a function
                for cleaning up our stored value.
            </p>

            <hr />

            <p>
                Persisted Input: <input type='text' value={val} onChange={e => setVal(e.target.value)}></input>
            </p>

            <Button onClick={clearStorage}>Clear Storage</Button>
        </>
    )
}
