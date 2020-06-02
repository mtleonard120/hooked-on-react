// Adapted from https://usehooks.com/useLocalStorage/

import {useState} from 'react'

export const useLocalStorage = (key: string, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    const setValue = (value: any) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }

    const clearStorage = () => {
        try {
            window.localStorage.removeItem(key)
            setStoredValue(initialValue)
            alert(`Stored value for ${key} removed.`)
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue, clearStorage]
}
