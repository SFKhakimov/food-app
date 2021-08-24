import React, { ReactNode } from 'react'
import { Box } from '@material-ui/core'

type Props = {
    header: ReactNode
    menu: ReactNode
    children: ReactNode
}

const Layout: React.FC<Props> = ({ header, menu, children }) => {
    return (
        <Box height="100%">
            {header}
            {menu}
            {children}
        </Box>
    )
}

export default Layout
