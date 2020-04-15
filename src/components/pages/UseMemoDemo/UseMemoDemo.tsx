/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useMemo, useCallback, useEffect} from 'react'

// components
import {Button} from 'components'

// helpers
const doExpensiveCalc = (flag: boolean) => {
    // ... do complex stuff here
    console.log('Doing complex stuff now')
    return flag
}

const doOtherExpensiveCalc = (flag: boolean) => {
    // ... do complex stuff here
    console.log('Doing other complex stuff now')
    return flag
}

// types
export interface IUseMemoDemoProps {}

// primary component
export const UseMemoDemo: React.FC<IUseMemoDemoProps> = props => {
    const [flag, setFlag] = useState(false)
    const [flag2, setFlag2] = useState(false)

    // memoized derived values - useMemo for a value and useCallback for a function
    const complexVal = useMemo(() => doExpensiveCalc(flag), [flag])
    const nonmemoComplexVal = doOtherExpensiveCalc(flag)

    const complexFunction = useCallback((val: boolean) => val && complexVal, [complexVal])

    return (
        <>
            <h1>UseMemo and UseCallback Demo</h1>

            <p>
                Demonstrates how you can use memoization to minimize the number of expensive calculations you have to
                perform for derived values. See the console log and tinker with the buttons below to adjust state.
            </p>

            <hr />

            <p>
                <Button onClick={() => setFlag(prev => !prev)}>Set Flag 1 to {flag ? 'false' : 'true'}</Button>
                <Button onClick={() => setFlag2(prev => !prev)}>Set Flag 2 to {flag2 ? 'false' : 'true'}</Button>
            </p>
        </>
    )
}
