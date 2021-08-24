import raleway from 'common/services/ThemeService/fonts'

export default {
    MuiCssBaseline: {
        '@global': {
            '@font-face': [raleway],
            a: {
                textDecoration: 'none',
            },
            body: {
                width: '100%',
                height: '100vh',
                margin: 0,
                fontFamily: "'Raleway', sans-serif",
                fontSize: '16px',
            },
            '#app': {
                height: '100%',
            },
        },
    },
}
