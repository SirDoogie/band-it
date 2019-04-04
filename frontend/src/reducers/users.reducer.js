import { userConstants } from '../constants'

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