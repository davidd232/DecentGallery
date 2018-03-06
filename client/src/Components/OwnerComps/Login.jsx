import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login Component</h1>
        <div>
          <input type="text" name="username" id="username"/>
          <input type="password"/>
          <button type='submit'>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;