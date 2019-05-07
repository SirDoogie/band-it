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
  return fetch(`${config.apiUrl}/password_resets`, requestOptions).then(
    handleResponse
  )
}

function getAll(searchValue, paginatonPage) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }
  if (searchValue === null && paginatonPage === '') {
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
  }
  if (searchValue !== null && paginatonPage === '') {
    return fetch(
      `${config.apiUrl}/users?full_name=${searchValue}`,
      requestOptions
    ).then(handleResponse)
  }
  if (searchValue === null && paginatonPage !== '') {
    return fetch(
      `${config.apiUrl}/users?page=${paginatonPage}`,
      requestOptions
    ).then(handleResponse)
  }
  if (searchValue !== null && paginatonPage !== '') {
    return fetch(
      `${config.apiUrl}/users?full_name=${searchValue}&&page=${paginatonPage}`,
      requestOptions
    ).then(handleResponse)
  }
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

function getUsersPagy(searchValue, paginationPage) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }
  if (searchValue === undefined || searchValue === '') {
    return fetch(
      `${config.apiUrl}/users?&page=${paginationPage}`,
      requestOptions
    ).then(handleResponse)
  }
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
