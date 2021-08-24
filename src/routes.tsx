import React from 'react'
import { Navigate } from 'react-router-dom'
import { storePath, storeRoutes } from 'store/routes'
import AuthProvider from 'common/providers/AuthProvider/AuthProvider'
import { lkPath, lkRoutes } from 'lk/routes'

const routes = [
    {
        path: '/',
        element: <Navigate to={storePath} />,
    },
    {
        path: `${storePath}/*`,
        element: <AuthProvider />,
        children: storeRoutes,
    },
    {
        path: `${lkPath}/*`,
        element: <AuthProvider />,
        children: lkRoutes,
    },
]

export default routes
