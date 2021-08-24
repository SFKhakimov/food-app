import React from 'react'
import {
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

type Props = {
    isOpen: boolean
    onToggleMenu: () => void
}

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
        height: '100%',
    },
    container: {
        height: '100%',
    },
}))

const MenuDrawer: React.FC<Props> = ({ isOpen, onToggleMenu }) => {
    const classes = useStyles()

    const fields = [
        {
            icon: <PersonIcon />,
            value: 'Профиль',
        },
    ]

    return (
        <Drawer anchor="left" open={isOpen} onClose={onToggleMenu}>
            <List className={classes.list}>
                <Grid
                    className={classes.container}
                    container
                    direction="column"
                    justifyContent="space-between">
                    <Grid item>
                        {fields.map(({ icon, value }) => (
                            <ListItem button divider key={value}>
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={value} />
                            </ListItem>
                        ))}
                    </Grid>
                    <Grid item>
                        <Divider />
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary="Выйти" />
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
        </Drawer>
    )
}

export default MenuDrawer
