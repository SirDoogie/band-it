import { combineReducers } from 'redux'

import { createUser } from './users.reducer';

import { login } from './auth.reducer';

export default combineReducers({
  createUser,
  login
})