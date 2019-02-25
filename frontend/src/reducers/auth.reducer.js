import { authConstants } from "../constants";

const initialState = {
    loggedIn: false
}

export function login(state = initialState, action) {
    switch (action.type) {
        case authConstants.AUTH_SUCCESS:
            return action.currentUser;
        case authConstants.AUTH_FAILURE:
            return {
                error: action.error
            }
        default:
            return state;
    }
}