export function fetchSession() {
  return fetchData('/api/v1/session', {
    method: 'GET',
  });
}

export function fetchLogin(username) {
  return fetchData('/api/v1/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ username }),
  });
}

export function fetchLogout() {
  return fetchData('/api/v1/session', {
    method: 'DELETE',
  });
}

export function fetchUsers() {
  return fetchData('/api/v1/users', {
    method: 'GET',
  });
}

export function fetchChannels() {
  return fetchData('/api/v1/channels', {
    method: 'GET',
  });
}

export function fetchDefaultChannelMessages() {
  return fetchChannelMessages('general');
}

export function fetchChannelMessages(channel) {
  return fetchData(`/api/v1/channels/${channel}`, {
    method: 'GET',
  });
}

export function fetchAddChannelMessage(channel, message) {
  return fetchData(`/api/v1/channels/${channel}`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ message }),
  });
}

export function fetchUserDirectMessages() {
  return fetchData(`/api/v1/dms/`, {
    method: 'GET',
  });
}

export function fetchDmWith(username) {
  return fetchData(`/api/v1/dms/${username}`, {
    method: 'GET',
  });
}

export function fetchAddDmMessage(username, message) {
  return fetchData(`/api/v1/dms/${username}`, {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify({ message }),
  });
}

function fetchData(url, options = {}) {
  return fetch(url, options)
    .catch(() => Promise.reject({ error: 'network-error' }))
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return response
        .json()
        .catch((error) => Promise.reject({ error }))
        .then((err) => Promise.reject(err));
    });
}
