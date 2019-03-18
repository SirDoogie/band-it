import { userConstants } from '../constants';

export function createUser(state = {}, action) {
  switch (action.type) {
  case userConstants.SIGNUP_SUCCESS:
    return action.user;
  case userConstants.SIGNUP_FAILURE:
    return action.error;
  default:
    return state;
  }
}