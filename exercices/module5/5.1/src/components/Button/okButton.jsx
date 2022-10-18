import { Context as CountersContext } from "../../contexts/countersContext"
import { useContext } from "react"

const OkButton = () => {

    const { increaseOk } = useContext(CountersContext)

    return (
        <>
            <button onClick={() => increaseOk()}>
                increase ok
            </button>
        </>
    )
}

export default OkButton