import { conversationConstants } from '_constants'
import { conversationService } from '_services'

export const conversationActions = {
  getConversations,
  getConversationsFilter,
  getConversationsPagy
}

function getConversations() {
  return dispatch => {
    dispatch(request())

    conversationService
      .getConversations()
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

function getConversationsFilter(searchValue) {
  return dispatch => {
    dispatch(request())

    conversationService
      .getConversationsFilter(searchValue)
      .then(
        conversations => dispatch(success(conversations)),
        error => dispatch(failure(error))
      )
  }

  function request() {
    return { type: conversationConstants.CONVERSATION_FILTER_REQUEST }
  }

  function success(conversations) {
    return {
      type: conversationConstants.CONVERSATION_FILTER_SUCCESS,
      conversations,
      searchValue
    }
  }

  function failure(error) {
    return { type: conversationConstants.CONVERSATION_FILTER_FAILURE, error }
  }
}

function getConversationsPagy(searchValue, paginatonPage) {
  return dispatch => {
    dispatch(request())

    conversationService
      .getConversationsPagy(searchValue, paginatonPage)
      .then(
        conversations => dispatch(success(conversations)),
        error => dispatch(failure(error))
      )
  }

  function request() {
    return { type: conversationConstants.CONVERSATION_PAGY_REQUEST }
  }

  function success(conversations) {
    return {
      type: conversationConstants.CONVERSATION_PAGY_SUCCESS,
      conversations
    }
  }

  function failure(error) {
    return { type: conversationConstants.CONVERSATION_FAILURE, error }
  }
}
