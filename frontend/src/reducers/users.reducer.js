import { usersConstants } from '../constants';

const initialState = {
  newUser: {
    email: '',
    password: '',
    password_confirmation: ''
  },
  auth: {
    loggedIn: false
  }
}

export function createUser(state = initialState, action) {
  switch (action.type) {
  case usersConstants.SIGNUP_REQUEST:
    return {
      loading: true
    }
  case usersConstants.SIGNUP_SUCCESS:
    return action.user;
  case usersConstants.SIGNUP_FAILURE:
    return {
      error: action.error
    }
  default:
    return state;
  }
}