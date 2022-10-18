import { useContext } from "react"
import { Context as ThemeContext } from "../../contexts/themeContext"

const Footer = () => {

    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <>
            <button style={theme} onClick={() => toggleTheme()}>
                Toggle theme
            </button>
        </>
    )
}

export default Footer