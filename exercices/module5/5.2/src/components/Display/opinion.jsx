import { useContext } from "react"
import { Context as OpinionsContext } from "../../contexts/opinionsContext"
import { Context as ThemeContext } from "../../contexts/themeContext"

const Opinion = (props) => {

    const { addVoteToOpinion } = useContext(OpinionsContext)
    const { theme } = useContext(ThemeContext)

    return (
        <div style={theme}>
            {props.text} : {props.votes}
            <button style={theme} onClick={() => addVoteToOpinion(props.id)}>Vote</button>
        </div>
    )
}

export default Opinion