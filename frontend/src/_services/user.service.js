import config from 'config'

export const userService = {
  createUser,
  getById,
  getAll,
  recoverPassword
}

function createUser(user) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ user: user })
  }
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

function recoverPassword(email) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ email: email })
  }
  return fetch(`${config.apiUrl}/password_resets`, requestOptions).then(handleResponse)
}


function getAll() {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }
  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

function getById(id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }
  return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(
    handleResponse
  )
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.removeItem('user_id')
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
