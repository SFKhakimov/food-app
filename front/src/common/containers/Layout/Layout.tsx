import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Layout from 'common/components/Layout/Layout'
import HeaderContainer from 'common/containers/Header/Header'
import MenuDrawerContainer from 'common/containers/MenuDrawer/MenuDrawer'

const LayoutContainer = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const handleToggleMenu = () => setIsOpenMenu(!isOpenMenu)

    const header = <HeaderContainer onToggleMenu={handleToggleMenu} />
    const menu = (
        <MenuDrawerContainer
            isOpen={isOpenMenu}
            onToggleMenu={handleToggleMenu}
        />
    )

    return (
        <Layout header={header} menu={menu}>
            <Outlet />
        </Layout>
    )
}

export default LayoutContainer
