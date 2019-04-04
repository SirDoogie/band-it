import config from 'config'

export const friendService = {
  getAll,
  removeFriend
}

function getAll(user_id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }
  return fetch(`${ config.apiUrl }/users/${user_id}/friends`, requestOptions).then(handleResponse)
}

function removeFriend(user_id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
    credentials: 'include'
  }
  return fetch(`${ config.apiUrl }/friends/${ user_id }`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    console.log(data)
    return data
  })
}