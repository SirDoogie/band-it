import { takeLatest, all, call, put } from 'redux-saga/effects'
import config from 'config'
import { authActions } from '_actions/auth.actions'
import { App } from '../App/App'

function* fetchResource(action) {
  try {
    const user = yield call(
      login,
      action.payload.email,
      action.payload.password
    )
    yield put(authActions.loginSuccess(user))
  } catch (error) {
    yield put(authActions.loginFailure(error))
  }
}

export default function* authSaga() {
  yield takeLatest('USER_LOGIN_REQUEST', fetchResource)
}

function login(email, password) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  }

  return fetch(`${config.apiUrl}/auth`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    localStorage.setItem('user_id', data.id)
    return data
  })
}
