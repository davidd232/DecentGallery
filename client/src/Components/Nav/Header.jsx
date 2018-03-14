import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import 

class Header extends Component {
  handleClick() {
    localStorage.removeItem('token');
    location.reload();
  }
  render() {
    return (
      <div className='header'>
        <div className='companyName'>
          <img onClick={() => { this.props.history.push('/') }} src='./images/DecentLetters.png' alt='name' />
        </div>

        {localStorage.getItem('token') ?
          <div className='spans'>
            <span onClick={() => { this.props.history.push('/') }}>Home</span>
            <span onClick={() => { this.props.history.push('/shows') }}>Shows</span>
            <span onClick={() => { this.props.history.push('/media') }}>Media</span>
            <span onClick={() => { this.props.history.push('/shop') }}>Shop</span>
            <span onClick={() => { this.props.history.push('/about') }}>About</span>
          </div>
          <button onClick={this.handleClick.bind(this)}>Logout</button>
          :
          <div className='spans'>
            <span onClick={() => { this.props.history.push('/') }}>Home</span>
            <span onClick={() => { this.props.history.push('/shows') }}>Shows</span>
            <span onClick={() => { this.props.history.push('/media') }}>Media</span>
            <span onClick={() => { this.props.history.push('/shop') }}>Shop</span>
            <span onClick={() => { this.props.history.push('/about') }}>About</span>
          </div>
          <img onClick={() => { this.props.history.push('/owner') }} className='companyFace' src='./images/DecentHead.png' alt='logoHead' />
        }
      </div>
    )
  }
}

export default withRouter(Header);