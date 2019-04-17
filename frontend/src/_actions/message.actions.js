import { messageConstants, conversationConstants } from '_constants'
import { messageService, conversationService } from '_services'

export const messageActions = {
  getMessages,
  sendMessage
}

function getMessages(id) {
  return dispatch => {
    dispatch(request())
    dispatch(convIdRequest(id))
    messageService
      .getMessages(id)
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
    return { type: messageConstants.MESSAGE_SUCCESS, messages }
  }

  function failure(error) {
    return { type: messageConstants.MESSAGE_FAILURE, error }
  }
}

function sendMessage(convId, body, userId) {
  return dispatch => {
    dispatch(send_request())

    messageService
      .sendMessage(convId, body, userId)
      .then(messages => dispatch(success(messages)))

    conversationService
      .getConversations()
      .then(conversations => dispatch(xx(conversations)))
  }

  function send_request() {
    return { type: messageConstants.MESSAGE_SEND_REQUEST }
  }

  function success(messages) {
    return { type: messageConstants.MESSAGE_SEND_REQUEST_SUCCESS, messages }
  }

  function xx(conversations) {
    return { type: conversationConstants.CONVERSATION_SUCCESS, conversations }
  }
}
