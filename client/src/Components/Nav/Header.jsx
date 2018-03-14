import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';
// import 

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='companyName'>
          <img onClick={() => { this.props.history.push('/') }} src='./images/DecentLetters.png' alt='name' />
        </div>
        <div className='spans'>
          {localStorage.getItem('token') ?
            <LoggedIn />
            :
            <LoggedOut />
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Header);