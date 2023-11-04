export const login = async (username, password) => {
  return fetch('/api/user', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json());
};

export const signup = async (username, email, password) => {
  return fetch('/api/user?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, email: email, password: password })
  }).then(res => res.json());
};