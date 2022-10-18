import { Context as CountersContext } from "../../contexts/countersContext"
import { useContext } from "react"

const GoodButton = () => {

    const { increaseGood } = useContext(CountersContext)

    return (
        <>
            <button onClick={() => increaseGood()}>
                increase good
            </button>
        </>
    )
}

export default GoodButton