import React, { useState } from "react"

const Context = React.createContext(null)

const ProviderWrapper = (props) => {
    const themes = {
        light: {
            backgroundColor: "powderblue",
            color: "white",
            borderColor: "lightgrey",
            linkColor: "palegreen",
        },
        dark: {
            backgroundColor: "black",
            color: "lightgrey",
            borderColor: "darkgrey",
            linkColor: "darkblue",
        }
    }

    const [theme, setTheme] = useState(themes.light)

    const setDarkTheme = () => {
        setTheme(themes.dark)
    }

    const setLightTheme = () => {
        setTheme(themes.light)
    }

    const toggleTheme = () => {
        if (JSON.stringify(theme) === JSON.stringify(themes.dark)) setLightTheme()
        else setDarkTheme()
    }

    const getCurrentThemeDetails = () => {
        return theme
    }

    return (
        <>
            <Context.Provider value={{ theme, setDarkTheme, setLightTheme, toggleTheme, getCurrentThemeDetails }}>
                { props.children }
            </Context.Provider>
        </>
    )
}

export {
    Context,
    ProviderWrapper,
}