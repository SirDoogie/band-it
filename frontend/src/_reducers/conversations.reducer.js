import { conversationConstants } from '_constants'

export function conversations(state = {}, action) {
  switch (action.type) {
    case conversationConstants.CONVERSATION_REQUEST:
      return {
        ...state,
        loading: true
      }

    case conversationConstants.CONVERSATION_SUCCESS:
      return {
        ...action.conversations,
        loading: false
      }
    case conversationConstants.CONVERSATION_FAILURE:
      return {
        error: action.error,
        loading: false
      }
    case conversationConstants.CONVERSATION_FILTER_REQUEST:
      return {
        ...state,
        loading: true
      }
    case conversationConstants.CONVERSATION_FILTER_SUCCESS:
      return {
        ...action.conversations,
        searchValue: action.searchValue,
        loading: false
      }
    case conversationConstants.CONVERSATION_FILTER_FAILURE:
      return {
        error: action.error,
        loading: false
      }
    case conversationConstants.CONVERSATION_PAGY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case conversationConstants.CONVERSATION_PAGY_SUCCESS:
      return {
        chats: state.chats.concat(action.conversations.chats),
        pagination: action.conversations.pagination,
        loading: false
      }

    default:
      return state
  }
}
