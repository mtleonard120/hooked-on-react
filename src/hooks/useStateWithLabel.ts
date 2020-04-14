import {useDebugValue, useState} from 'react'

// Custom hook that extends useState in order to provide debug values
// to react dev tools. Notice that we use generics here to allow for
// lazy initialization, matching the original API of the useState hook.

// Do note that this hook is not really intended to be used with
// object valued state, as the display function we are passing to useDebugValue
// does not do any object parsing or traversal. Generally objects are easy
// enough to see and understand in react dev tools though.

export function useStateWithLabel<T>(
    initialValue: T | (() => T),
    label: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [val, setVal] = useState(initialValue)
    useDebugValue(`${label}: ${val}`)

    return [val, setVal]
}
