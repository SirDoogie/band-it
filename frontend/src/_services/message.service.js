import config from 'config'

export const messageService = {
  getMessages,
  sendMessage
}

function getMessages(conversationId, nextPage) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }

  return fetch(
    `${
      config.apiUrl
    }/conversations/${conversationId}/messages?page=${nextPage}`,
    requestOptions
  ).then(handleResponse)
}

function sendMessage(conversationId, body, user_id) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: { body, user_id } }),
    method: 'POST',
    credentials: 'include'
  }

  return fetch(
    `${config.apiUrl}/conversations/${conversationId}/messages`,
    requestOptions
  ).then(handleResponse)
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
