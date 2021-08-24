import { action, makeObservable, observable } from 'mobx'

export default class UserService {
    user = {}

    constructor() {
        makeObservable(this, {
            user: observable,
            getUser: action,
        })
    }

    getUser() {}
}
