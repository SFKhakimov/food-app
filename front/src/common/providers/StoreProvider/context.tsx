import React from 'react'
import UserService from 'common/services/StoreSerice/UserService'

export type StoreType = {
    user: UserService
}
const Context = React.createContext<StoreType | null>(null)

export default Context
