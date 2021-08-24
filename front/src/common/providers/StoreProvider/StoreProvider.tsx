import React, { ReactNode } from 'react'
import Context from 'common/providers/StoreProvider/context'
import UserService from 'common/services/StoreSerice/UserService'

type Props = {
    children: ReactNode
}

const stores = {
    user: new UserService(),
}

const StoreProvider = ({ children }: Props) => {
    return <Context.Provider value={stores}>{children}</Context.Provider>
}

export default StoreProvider
