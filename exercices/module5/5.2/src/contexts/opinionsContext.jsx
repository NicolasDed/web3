import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const [sortedOpinions, setSortedOpinions] = useState([])

    const addVoteToOpinion = (opinionId) => {
        const arrayCopy = Array.from(sortedOpinions)
        const indexOp = arrayCopy.findIndex(o => o.id === opinionId)
        if (indexOp === -1) throw console.error("Opinion doesn't exist")
        arrayCopy[indexOp].votes += 1
        setSortedOpinions(sortOpinions(arrayCopy))
    }

    const addOpinion = (opinionText) => {
        const opinionObject = {
            id: uuidv4(),
            text: opinionText,
            votes: 1,
        }

        setSortedOpinions(sortOpinions(sortedOpinions.concat(opinionObject)))
    }

    const sortOpinions = (array) => {
        return array.sort((a, b) => (a.votes <= b.votes) ? 1 : -1)
    }

    return (
        <>
            <Context.Provider value={{sortedOpinions, addVoteToOpinion, addOpinion}}>
                { props.children }
            </Context.Provider>
        </>
    )
}

export {
    Context,
    ProviderWrapper,
}