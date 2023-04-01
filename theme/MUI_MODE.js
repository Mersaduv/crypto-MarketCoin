import { createTheme, ThemeProvider } from "@mui/material"
import { createContext, useMemo, useState } from "react"
//!!!!!!!!! Dark Mode is not used in this project creating optional dark mode
export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: 'light'
})

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
            mode
        }), [mode]
    )

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 768,
                md2: 800,
                md3: 941,
                lg: 1024,
                xl: 1154
            }
        },
        palette: {
            mode: mode,

            primary: {
                main: mode === 'light' ? '#2563eb' : '#ffffff'
            },

            secondary: {
                main: '#ffffff'
            }
        }
    })


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}