import { authConstants, userConstants } from '_constants'
import { authService, userService } from '_services'

export const authActions = {
  logout,
  getCurrentUser,
  loginRequest,
  loginFailure,
  loginSuccess
}

function loginRequest(email, password) {
  return {
    type: authConstants.LOGIN_REQUEST,
    payload: { email: email, password: password }
  }
}

function loginSuccess(user) {
  return { type: authConstants.LOGIN_SUCCESS, user }
}

function loginFailure(error) {
  return { type: authConstants.LOGIN_FAILURE, error }
}

function logout() {
  authService.logout()

  return { type: authConstants.LOGOUT }
}

function getCurrentUser(id) {
  return dispatch => {
    dispatch(request())
    userService.getById(id).then(
      user => {
        dispatch(success(user))
      },
      error => {
        dispatch(failure(error))
      }
    )
  }

  function request() {
    return { type: authConstants.CURRENT_USER_REQUEST }
  }

  function success(user) {
    return { type: authConstants.CURRENT_USER_SUCCESS, user: user }
  }

  function failure(error) {
    return { type: authConstants.CURRENT_USER_FAILURE, error: error }
  }
}
