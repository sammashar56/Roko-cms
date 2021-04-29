import {userConstants} from '../constants'

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {loggedIn: true, user} : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGINREQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGINSUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstants.LOGINFAILURE:
            return {};
        case userConstants.USERLOGOUT:
            return {};
        default:
            return state
    }   
}
