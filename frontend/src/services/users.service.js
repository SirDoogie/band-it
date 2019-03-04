import config from 'config'

export const usersService = {
  createUser
}

function createUser(user) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    throw response
  }
  return response
}