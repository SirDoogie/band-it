import { usersConstants } from '../constants';

export function createUser(state = {}, action) {
  switch (action.type) {
  case usersConstants.SIGNUP_SUCCESS:
    return action.user;
  case usersConstants.SIGNUP_FAILURE:
    return action.error;
  default:
    return state;
  }
}