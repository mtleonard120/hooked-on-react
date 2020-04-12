import {useDebugValue, useState} from 'react'

export const useStateWithLabel = (initialValue: any, label: string) => {
    const [val, setVal] = useState(initialValue)
    useDebugValue(`${label}: ${val}`)

    return [val, setVal]
}
