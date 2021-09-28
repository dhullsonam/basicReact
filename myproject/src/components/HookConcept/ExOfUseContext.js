import React, { useContext } from "react";


const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function ExOfUseContext() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <br></br>
            <h3>concept of Use context</h3>
            <button style={{ background: theme.background, color: theme.foreground }}>
                I am styled by theme context!
            </button>
        </div>

    );
}


export default ExOfUseContext;
