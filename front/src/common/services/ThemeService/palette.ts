import {
    Primary,
    Secondary,
    Error,
    Success,
    Background,
    Text,
} from 'common/services/ThemeService/colors'

const palette = {
    primary: {
        main: Primary.main,
        light: Primary.light,
        dark: Primary.dark,
    },
    secondary: {
        main: Secondary.main,
        light: Secondary.light,
        dark: Secondary.dark,
    },
    error: {
        main: Error.main,
        light: Error.light,
        dark: Error.dark,
    },
    success: {
        main: Success.main,
        light: Success.light,
        dark: Success.dark,
    },
    background: {
        default: Background.default,
        paper: Background.paper,
    },
    text: {
        primary: Text.primary,
        secondary: Text.secondary,
    },
}

export default palette
