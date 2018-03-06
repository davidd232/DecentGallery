import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import 

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src='./images/DecentLetters.png' alt='name' />
        <img src='./images/DecentHead.png' alt='logo' />
        <span onClick={() => { this.props.history.push('/') }}>Home</span> /
        <span onClick={() => { this.props.history.push('/shows') }}>Shows</span> /
        <span onClick={() => { this.props.history.push('/media') }}>Media</span> /
        <span onClick={() => { this.props.history.push('/shop') }}>Shop</span> /
        <span onClick={() => { this.props.history.push('/about') }}>About</span>
      </div>
    )
  }
}

export default withRouter(Header);