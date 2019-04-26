import { messageConstants } from '_constants'

export function messages(state = {}, action) {
  switch (action.type) {
    case messageConstants.MESSAGE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case messageConstants.CONV_ID_REQUEST:
      return {
        ...state,
        id: action.id
      }

    case messageConstants.MESSAGE_SUCCESS:
      return {
        ...state,
        ...action.messages,
        loading: false
      }

    case messageConstants.MESSAGE_SEND_REQUEST:
      return {
        ...state,
        loading: true
      }

    case messageConstants.MESSAGE_SEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false
      }

    case messageConstants.MESSAGE_SEND_REQUEST_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }

    case messageConstants.MESSAGE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case messageConstants.MESSAGE_PAGY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case messageConstants.MESSAGE_PAGY_SUCCESS:
      return {
        ...state,
        messages: state.messages.concat(action.messages.messages),
        pagination: action.messages.pagination,
        loading: false
      }

    default:
      return state
  }
}
