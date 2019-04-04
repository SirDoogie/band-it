import { combineReducers } from 'redux'
import { createUser, users } from './users.reducer'
import { auth } from './auth.reducer'
import { friends } from './friends.reducer'

export default combineReducers({
  createUser,
  auth,
  friends,
  users
})