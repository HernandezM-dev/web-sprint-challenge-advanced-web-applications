import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialValue = {
  username: '',
  password: '',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory()
  const [creds, setCreds] = useState(initialValue)

  const handleChange = e =>{
      const {name, value} = e.target
      setCreds({...creds, [name]: value})
  }

  //login using axios with off and login endpoint, finally redirects to /friends page
  const login = e =>{
      e.preventDefault();
      axiosWithAuth()
      .post('/api/login', creds)
      .then((res)=>{
          localStorage.setItem('token', res.data.payload)
          history.push('/bubblepage')
      })
      .catch((err) => console.log(err))
  }
  return(
      <div>
          <form onSubmit={login}>  
              <label>Username:
                  <input
                  type='text'
                  name='username'
                  value={creds.username}
                  onChange={handleChange}
                  />
              </label>
              <label>Password:
                  <input
                  type='text'
                  name='password'
                  value={creds.password}
                  onChange={handleChange}
                  />
              </label>
              <button>Login</button>
          </form>
      </div>
  )
};

export default Login;
