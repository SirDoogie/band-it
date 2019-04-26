import { messageConstants, conversationConstants } from '_constants'
import { messageService, conversationService } from '_services'

export const messageActions = {
  getMessages,
  sendMessage
}

function getMessages(id, nextPage) {
  return dispatch => {
    dispatch(request())
    if (nextPage === '1') {
      dispatch(convIdRequest(id))
    }
    messageService
      .getMessages(id, nextPage)
      .then(
        messages => dispatch(success(messages)),
        error => dispatch(failure(error))
      )
  }

  function request() {
    return { type: messageConstants.MESSAGE_REQUEST }
  }

  function convIdRequest(id) {
    return { type: messageConstants.CONV_ID_REQUEST, id }
  }

  function success(messages) {
    if (nextPage === '1') {
      return { type: messageConstants.MESSAGE_SUCCESS, messages }
    } else {
      return { type: messageConstants.MESSAGE_PAGY_SUCCESS, messages }
    }
  }

  function failure(error) {
    return { type: messageConstants.MESSAGE_FAILURE, error }
  }
}

function sendMessage(convId, body, userId) {
  return dispatch => {
    dispatch(request())

    messageService
      .sendMessage(convId, body, userId)
      .then(dispatch(success()), error => dispatch(failure(error)))
  }

  function request() {
    return { type: messageConstants.MESSAGE_SEND_REQUEST }
  }
  function success() {
    return { type: messageConstants.MESSAGE_SEND_REQUEST_SUCCESS }
  }
  function failure(error) {
    return { type: messageConstants.MESSAGE_SEND_REQUEST_FAILURE, error }
  }
}
