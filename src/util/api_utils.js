import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {'Authorization': `JWT ${localStorage.getItem('token')}`}
});
  
instance.defaults.xsrfCookieName = 'csrftoken'
instance.defaults.xsrfHeaderName = 'X-CSRFToken'


export const handle_login = (data) => {
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
};


export const handle_signup = (data) => {
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
};

