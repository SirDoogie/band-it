import { usersConstants } from '../constants';
import { usersService } from '../services';

export const usersActions = {
  createUser
}

function createUser(user) {
  return dispatch => {
    dispatch(request())

    usersService.createUser(user)
      .then( data => {
        data.text().then(user => {
          dispatch(success(JSON.parse(user)))
        })
      }).catch(error => {
        error.text().then(errorMsg => {
          dispatch(failure(JSON.parse(errorMsg)))
        })
      })
  }

  function request() { return { type: usersConstants.SIGNUP_REQUEST } }
  function success(user) { return { type: usersConstants.SIGNUP_SUCCESS, user: user } }
  function failure(error) { return { type: usersConstants.SIGNUP_FAILURE, error: error } }
}