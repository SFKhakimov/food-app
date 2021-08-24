import React from 'react'
import { useRoutes } from 'react-router-dom'

const RouterProvider = ({ routes }) => {
    const routing = useRoutes(routes)

    return routing
}

export default RouterProvider
