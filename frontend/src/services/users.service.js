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
  return response.text().then(text => {
    const data = text && JSON.parse(text)

    if(!response.ok) {
      const error = (data && data.message) || response.statusText;
      return error;
    }

    return data;
  })
}