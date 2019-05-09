import { authConstants } from '_constants'

const initialState = { loggedIn: false, currentUser: {} }

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case authConstants.LOGIN_SUCCESS:
      return {
        loading: false,
        currentUser: action.user,
        loggedIn: true
      }
    case authConstants.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
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
