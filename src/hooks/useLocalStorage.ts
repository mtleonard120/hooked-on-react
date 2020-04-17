// Adapted from https://usehooks.com/useLocalStorage/

import {useState, useEffect} from 'react'

export const useNonRenderBlockingAlert = (msg: string) => {
    const [isAlertFiring, setIsAlertFiring] = useState(false)

    useEffect(() => {
        if (isAlertFiring) {
            alert(msg)
            setIsAlertFiring(false)
        }
    }, [isAlertFiring, msg])

    return () => setIsAlertFiring(true)
}

export const useLocalStorage = (key: string, initialValue: any) => {
    const triggerAlert = useNonRenderBlockingAlert(`Stored value for ${key} removed.`)

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
            triggerAlert()
            setStoredValue('')
        } catch (error) {
            console.log(error)
        }
    }

    return [storedValue, setValue, clearStorage]
}
