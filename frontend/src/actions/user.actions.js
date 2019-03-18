import { userConstants } from '../constants'
import { userService } from '../services'

export const userActions = {
  createUser
}

function createUser(user) {
  return dispatch => {
    dispatch(request())

    userService.createUser(user)
      .then(
        user => {
          dispatch(success(user))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }

  function request() {
    return { type: userConstants.SIGNUP_REQUEST }
  }

  function success(user) {
    return { type: userConstants.SIGNUP_SUCCESS, user: user }
  }

  function failure(error) {
    return { type: userConstants.SIGNUP_FAILURE, error: error }
  }
}