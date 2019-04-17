import config from 'config'

export const authService = {
  login,
  logout
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

function logout() {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
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
