import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log(this.state);
  }
  handleSubmit() {
    const payload = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/login', payload)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <h1>Login Component</h1>
        <div>
          <input onChange={this.handleChange} type="text" name="username" id="username"/>
          <input onChange={this.handleChange} type="password" name="password"/>
          <button onClick={this.handleSubmit} type='submit'>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;