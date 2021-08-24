import React from 'react'
import {
    AppBar,
    Grid,
    IconButton,
    Divider,
    makeStyles,
    Box,
    Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

type Props = {
    onToggleMenu: () => void
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: 'none',
    },
    toolBar: {
        minHeight: 56,
    },
}))

const Header: React.FC<Props> = ({ onToggleMenu }) => {
    const classes = useStyles()
    return (
        <AppBar color="default" className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item xs={6}>
                        <IconButton onClick={onToggleMenu}>
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        Имя пользователя
                    </Grid>
                </Grid>
            </Toolbar>
            <Divider />
        </AppBar>
    )
}

export default Header
