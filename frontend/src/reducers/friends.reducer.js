import { friendConstants } from '../constants'

const initialState = {
  filter: 'all'
}

export function friends(state = initialState, action) {
  switch (action.type) {
  case friendConstants.GETALL_REQUEST:
    return {
      ...state,
      loading: true
    }
  case friendConstants.GETALL_SUCCESS:
    return {
      ...state,
      loading: false,
      users: action.friends
    }
  case friendConstants.GETALL_FAILURE:
    return {
      ...state,
      loading: false,
      errors: action.errors
    }
  case friendConstants.REMOVE_SUCCESS:
    return {
      users: [...state.users.filter(user => user.id !== action.data.user.id)]
    }
  default:
    return state
  }
}