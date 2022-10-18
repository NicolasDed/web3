import { Context as CountersContext } from "../../contexts/countersContext"
import { useContext } from "react"

const ResetButton = () => {

    const { resetAll } = useContext(CountersContext)

    return (
        <>
            <button onClick={() => resetAll()}>
                reset scores
            </button>
        </>
    )

}

export default ResetButton