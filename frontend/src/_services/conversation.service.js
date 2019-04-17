import config from 'config'

export const conversationService = {
  getConversations
}

function getConversations(fullName) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }

  if (fullName === undefined) {
    return fetch(`${config.apiUrl}/conversations`, requestOptions).then(
      handleResponse
    )
  } else {
    return fetch(
      `${config.apiUrl}/conversations?full_name=${fullName}`,
      requestOptions
    ).then(handleResponse)
  }
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}
