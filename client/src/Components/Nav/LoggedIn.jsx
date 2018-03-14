import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoggedIn extends Component {
  handleClick() {
    localStorage.removeItem('token');
    location.reload();
  }
  render() {
    return (
      <div>
        <div className='spans'>
          <span onClick={() => { this.props.history.push('/') }}>Home</span>
          <span onClick={() => { this.props.history.push('/showsOwner') }}>Shows</span>
          <span onClick={() => { this.props.history.push('/mediaOwner') }}>Media</span>
          <span onClick={() => { this.props.history.push('/shopOwner') }}>Shop</span>
          <span onClick={() => { this.props.history.push('/about') }}>About</span>
        </div>
        <button onClick={this.handleClick.bind(this)}>Logout</button>
      </div>
    )
  }
}

export default withRouter(LoggedIn);