import { usersConstants } from '../constants';
import { usersService } from '../services';

export const usersActions = {
  createUser
}

function createUser(user) {
  return dispatch => {
    dispatch(request())

    usersService.createUser(user)
      .then(
        user => dispatch(success(user)),
        error => dispatch(failure(error))
      )
  }

  function request() { return { type: usersConstants.SIGNUP_REQUEST } }
  function success(user) { return { type: usersConstants.SIGNUP_SUCCESS, user } }
  function failure(error) { return { type: usersConstants.SIGNUP_FAILURE, error } }
}