import { authConstants } from '_constants'

const initialState = { loggedIn: false, currentUser: {}, loading: true }

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true
      }
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      }
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    case authConstants.CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true,
        currentUser: {
          loading: true
        }
      }
    case authConstants.CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        currentUser: action.user
      }
    case authConstants.CURRENT_USER_FAILURE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        currentUser: {
          error: action.error
        }
      }
    default:
      return state
  }
}
