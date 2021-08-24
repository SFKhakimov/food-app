import React from 'react'
import ProfilePage from 'lk/pages/Profile/ProfilePage'
import { Navigate } from 'react-router-dom'
import LayoutContainer from 'common/containers/Layout/Layout'

export const lkPath = 'lk'

export const lkRoutes = [
    {
        path: '/',
        element: <Navigate to="profile" />,
    },
    {
        path: 'profile',
        element: <LayoutContainer />,
        children: [
            {
                path: '/',
                element: <ProfilePage />,
            },
        ],
    },
]
