import { useContext } from "react"
import { Context as OpinionsContext } from "../../contexts/opinionsContext"
import Opinion from "./opinion"

const OpinionList = () => {

    const { sortedOpinions } = useContext(OpinionsContext)

    return (
        <div>
            {sortedOpinions.map(o => {
                return <Opinion key={o.id} id={o.id} text={o.text} votes={o.votes}></Opinion>
            })}
        </div>
    )

}

export default OpinionList