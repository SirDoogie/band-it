import { conversationConstants } from '../constants'

export function conversations(state = [], action) {
  switch (action.type) {
  case conversationConstants.CONVERSATION_REQUEST:
    return {
      loading: true
    }

  case conversationConstants.CONVERSATION_SUCCESS:
    return {
      conversations: action.conversations
    }
  case conversationConstants.CONVERSATION_FAILURE:
    return {
      error: action.error
    }

  default:
    return state
  }
}
