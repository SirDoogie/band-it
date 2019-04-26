import config from 'config'

export const conversationService = {
  getConversations,
  getConversationsFilter,
  getConversationsPagy
}

function getConversationsFilter(searchValue) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }

  if (searchValue === '') {
    return fetch(`${config.apiUrl}/conversations`, requestOptions).then(
      handleResponse
    )
  } else {
    return fetch(
      `${config.apiUrl}/conversations?full_name=${searchValue}`,
      requestOptions
    ).then(handleResponse)
  }
}

function getConversations() {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }

  return fetch(`${config.apiUrl}/conversations`, requestOptions).then(
    handleResponse
  )
}

function getConversationsPagy(searchValue, paginationPage) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    credentials: 'include'
  }
  if (searchValue === undefined || searchValue === '') {
    return fetch(
      `${config.apiUrl}/conversations?&page=${paginationPage}`,
      requestOptions
    ).then(handleResponse)
  } else {
    return fetch(
      `${
        config.apiUrl
      }/conversations?full_name=${searchValue}&&page=${paginationPage}`,
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
