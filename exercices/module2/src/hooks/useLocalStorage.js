import { useState } from "react"

const useLocalStorage = (key, initialValue) => {

    const initState = () => {
        const item = localStorage.getItem(key)
        if (item !== null) {
            return parseInt(item)
        } else {
            return initialValue
        }
    }
    
    const [ value, setValue ] = useState(initState)

    const setStoredValue = (newValue) => {
        localStorage.setItem(key, newValue)
        setValue(newValue)
    }
    
    return [ value, setStoredValue ]
}

export default useLocalStorage