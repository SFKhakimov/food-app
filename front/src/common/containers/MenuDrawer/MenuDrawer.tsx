import React from 'react'
import MenuDrawer from 'common/components/MenuDrawer/MenuDrawer'

type Props = {
    isOpen: boolean
    onToggleMenu: () => void
}

const MenuDrawerContainer: React.FC<Props> = ({ isOpen, onToggleMenu }) => {
    return <MenuDrawer isOpen={isOpen} onToggleMenu={onToggleMenu} />
}

export default MenuDrawerContainer
