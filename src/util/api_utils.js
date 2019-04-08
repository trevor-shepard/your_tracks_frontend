import axios from 'axios';


axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const login = (data) => {
  return fetch('http://localhost:8000/token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
};


export const signup = (data) => {
  return fetch('http://localhost:8000/core/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
};

export const logout = () => {
  localStorage.removeItem('token');
};


export const request_user_stats = (days) => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {'Authorization': `JWT ${localStorage.getItem('token')}`}
  });
  const url = `api/stats/?days=${days}`
  console.log(url)
  return instance.get(url)
}

export const request_history = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {'Authorization': `JWT ${localStorage.getItem('token')}`}
  });
  
  instance.get('api/history', {
    params: {
      'username': this.state.username
    }
  })
}
