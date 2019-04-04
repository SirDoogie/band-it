import { combineReducers } from 'redux'
import { createUser, users } from './users.reducer'
import { auth } from './auth.reducer'
import { friends } from './friends.reducer'
import { conversations } from './conversations.reducer'
import { messages } from './messages.reducer'

export default combineReducers({
  createUser,
  auth,
  friends,
  users,
  conversations,
  messages
})
