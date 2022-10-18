import React, { useState } from "react"

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)

    const increaseGood = () => {
        const newGood = good + 1
        setGood(newGood)
    }

    const increaseOk = () => {
        const newOk = ok + 1
        setOk(newOk)
    }

    const increaseBad = () => {
        const newBad = bad + 1
        setBad(newBad)
    }

    const resetAll = () => {
        setGood(0)
        setOk(0)
        setBad(0)
    }

    return (
        <>
            <Context.Provider value={{ good, increaseGood, ok, increaseOk, bad, increaseBad, resetAll}}>
                { props.children }
            </Context.Provider>
        </>
    )
}

export {
    Context,
    ProviderWrapper,
}