import { messageConstants } from '_constants'

export function messages(state = {}, action) {
  switch (action.type) {
  case messageConstants.MESSAGE_REQUEST:
    return {
      loading: true
    }
  case messageConstants.CONV_ID_REQUEST:
    return {
      id: action.id
    }

  case messageConstants.MESSAGE_SUCCESS:
    return {
      ...state,
      messages: action.messages
    }

  case messageConstants.MESSAGE_SEND_REQUEST_SUCCESS:
    return {
      ...state,
      messages: state.messages.concat(action.messages)
    }
  case messageConstants.MESSAGE_FAILURE:
    return {
      ...state,
      error: action.error
    }

  default:
    return state
  }
}
