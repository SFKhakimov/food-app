import React, { ReactNode } from 'react'
import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'
import { theme } from 'common/services/ThemeService'

type Props = {
    children: ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    )
}

export default ThemeProvider
