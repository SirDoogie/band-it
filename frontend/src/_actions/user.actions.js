import { userConstants } from '_constants'
import { userService } from '_services'

export const userActions = {
  createUser,
  getAll,
  getCurrentUser,
  recoverPassword
}

function createUser(user) {
  return dispatch => {
    dispatch(request())

    userService.createUser(user).then(
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

function getAll() {
  return dispatch => {
    dispatch(request())

    userService.getAll().then(
      users => {
        dispatch(success(users))
      },
      error => {
        dispatch(failure(error))
      }
    )
  }

  function request() {
    return { type: userConstants.GET_ALL_REQUEST }
  }

  function success(users) {
    return { type: userConstants.GET_ALL_SUCCESS, users: users }
  }

  function failure(error) {
    return { type: userConstants.GET_ALL_FAILURE, error: error }
  }
}

function recoverPassword(email, status) {
  if (status) {
    return dispatch => {
      dispatch(request())

      userService.recoverPassword(email).then(
        msg => {
          dispatch(success())
        },
        error => {
          dispatch(failure(error))
        }
      )
    }
  } else {
    return dispatch => {
      dispatch(reset())
    }
  }

  function request() {
    return { type: userConstants.RECOVER_REQUEST }
  }

  function reset() {
    return { type: userConstants.RECOVER_RESET }
  }

  function success() {
    return { type: userConstants.RECOVER_SUCCESS, status: 'created' }
  }

  function failure(error) {
    return { type: userConstants.RECOVER_FAILURE, error: error }
  }
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
    return { type: userConstants.CURRENT_USER_REQUEST }
  }

  function success(user) {
    return { type: userConstants.CURRENT_USER_SUCCESS, user: user }
  }

  function failure(error) {
    return { type: userConstants.CURRENT_USER_FAILURE, error: error }
  }
}
