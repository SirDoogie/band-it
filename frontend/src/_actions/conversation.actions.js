import { conversationConstants } from '_constants'
import { conversationService } from '_services'

export const conversationActions = {
  getConversations
}

function getConversations(fullName) {
  return dispatch => {
    dispatch(request())

    conversationService
      .getConversations(fullName)
      .then(
        conversations => dispatch(success(conversations)),
        error => dispatch(failure(error))
      )
  }

  function request() {
    return { type: conversationConstants.CONVERSATION_REQUEST }
  }

  function success(conversations) {
    return { type: conversationConstants.CONVERSATION_SUCCESS, conversations }
  }

  function failure(error) {
    return { type: conversationConstants.CONVERSATION_FAILURE, error }
  }
}
