import { usersConstants } from '../constants';

const initialState = {
  email: '',
  password: '',
  password_confirmation: ''
}

export function createUser(state = initialState, action) {
  switch (action.type) {
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