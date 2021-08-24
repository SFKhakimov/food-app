import { createTheme } from '@material-ui/core'
import palette from 'common/services/ThemeService/palette'
import typography from 'common/services/ThemeService/typography'
import overrides from 'common/services/ThemeService/mui'

const theme = createTheme({
    palette: palette,
    typography: typography,
    overrides: overrides.reduce((acc, item) => ({ ...acc, ...item }), {}),
})

export default theme
