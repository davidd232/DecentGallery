import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      err: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit() {
    const payload = {
      username: this.state.username,
      password: this.state.password
    }
    axios.post('/api/login', payload)
      .then((data) => {
        console.log(data);
        this.setState({
          err: 'Logged In. Kinda'
        })
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: 'FUCK YOU. You\'re not the owner'
        })
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
          {this.state.err}
        </div>
      </div>
    )
  }
}

export default Login;