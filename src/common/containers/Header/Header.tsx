import React from 'react'
import { AppBar, Grid, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Header from 'common/components/Header/Header'

type Props = {
    onToggleMenu: () => void
}

const HeaderContainer: React.FC<Props> = ({ onToggleMenu }) => {
    return <Header onToggleMenu={onToggleMenu} />
}

export default HeaderContainer
