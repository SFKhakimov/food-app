import React from 'react'
import StorePage from 'store/pages/StorePage'
import LayoutContainer from 'common/containers/Layout/Layout'

export const storePath = 'store'

export const storeRoutes = [
    {
        path: '/',
        element: <LayoutContainer />,
        children: [
            {
                path: '/',
                element: <StorePage />,
            },
        ],
    },
]
