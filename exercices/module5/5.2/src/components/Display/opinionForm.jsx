import { useContext, useState } from "react"
import { Context as OpinionsContext } from "../../contexts/opinionsContext"
import { Context as ThemeContext } from "../../contexts/themeContext"

const OpinionForm = () => {

    const { addOpinion } = useContext(OpinionsContext)
    const { theme } = useContext(ThemeContext)
    const [opinionText, setOpinionText] = useState("")

    const handleChange = (e) => {
        setOpinionText(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        addOpinion(opinionText)
        setOpinionText("")
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input
                    style={theme}
                    value={opinionText}
                    onChange={handleChange}
                />
                <button style={theme} type="submit">Add opinion</button>
            </form>
        </div>
    )

}

export default OpinionForm