import { Context as CountersContext } from "../../contexts/countersContext"
import { useContext } from "react"

const BadButton = () => {

    const { increaseBad } = useContext(CountersContext)

    return (
        <>
            <button onClick={() => increaseBad()}>
                increase bad
            </button>
        </>
    )
}

export default BadButton