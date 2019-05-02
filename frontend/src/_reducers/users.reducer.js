import { userConstants } from '_constants'

export function createUser(state = {}, action) {
  switch (action.type) {
    case userConstants.SIGNUP_SUCCESS:
      return action.user
    case userConstants.SIGNUP_FAILURE:
      return action.error
    default:
      return state
  }
}

export function recoverPassword(state = {}, action) {
  if (action.type === 'CLEARSTORE') {
    state = undefined
  }
  switch (action.type) {
    case userConstants.RECOVER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case userConstants.RECOVER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: action.status
      }
    case userConstants.RECOVER_FAILURE:
      return {
        ...state,
        loading: false,
        status: 'not found'
      }
    case userConstants.RECOVER_RESET:
      return {}
    default:
      return state
  }
}

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GET_ALL_REQUEST:
      return {
        ...state,
        loading: true
      }
    case userConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.users
      }
    case userConstants.GET_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.errors
      }
    default:
      return state
  }
}
