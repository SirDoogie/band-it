import { friendConstants } from '../constants'
import { friendService } from '../services'

export const friendActions = {
  getAll,
  removeFriend
}

function getAll(user_id) {
  return dispatch => {
    dispatch(request())

    friendService.getAll(user_id)
      .then(
        friends => {
          dispatch(success(friends))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }

  function request() {
    return { type: friendConstants.GETALL_REQUEST }
  }

  function success(friends) {
    return { type: friendConstants.GETALL_SUCCESS, friends: friends }
  }

  function failure(error) {
    return { type: friendConstants.GETALL_FAILURE, error: error }
  }
}

function removeFriend(user_id) {
  return dispatch => {

    friendService.removeFriend(user_id)
      .then(
        data => {
          dispatch(success(data))
        },
        error => {
          dispatch(failure(error))
        }
      )
  }

  function success(data) {
    return { type: friendConstants.REMOVE_SUCCESS, data: data }
  }

  function failure(error) {
    return { type: friendConstants.REMOVE_FAILURE, error: error }
  }
}