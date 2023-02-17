import React, { useMemo, useState, useEffect, createContext } from 'react'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import CssBaseline from '@mui/material/CssBaseline'

const getDesignTokens = (mode: PaletteMode, isMobileDevice: boolean) => ({
    shape: { borderRadius: 8 },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  background: { default: '#ebeced', paper: '#fff' },
              }
            : {
                  background: { default: '#272731', paper: '#32323e' },
              }),
    },
    typography: {
        fontSize: isMobileDevice ? 12 : 14,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0 /* <-- Apparently some margin are still there even though it's hidden */,
                },
                'input[type=number]': {
                    '-moz-appearance': 'textfield' /* Firefox */,
                },
                a: { color: 'inherit', textDecoration: 'none' },
            },
        },
    },
})

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function ThemeBuilder({ children }: React.HTMLAttributes<HTMLDivElement>) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const isMobileDevice = useMediaQuery('(max-width:425px)')
    const [mode, setMode] = useState<'light' | 'dark'>(prefersDarkMode ? 'dark' : 'light')

    const theme = useMemo(() => createTheme(getDesignTokens(mode, isMobileDevice)), [mode, isMobileDevice])
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
