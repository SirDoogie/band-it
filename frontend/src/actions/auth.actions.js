import { authConstants } from "../constants";
import { authService } from "../services";

export const authActions = {
    login
}

function login(user) {
    return dispatch => {
        dispatch(request())

        authService.login(user)
            .then(
                currentUser => dispatch(success(currentUser)),
                error => dispatch(failure(error))
            )
    }

    function request() { return { type: authConstants.AUTH_REQUEST } }
    function success(currentUser) { return { type: authConstants.AUTH_SUCCESS, currentUser } }
    function failure(error) { return { type: authConstants.AUTH_FAILURE, error } }
}