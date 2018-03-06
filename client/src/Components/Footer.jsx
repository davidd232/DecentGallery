import React, { Component } from 'react';
// import 

class Footer extends Component {
  instaClick() {
    window.open(
      'https://www.instagram.com/kalebhiggins/?hl=en',
      '_blank'
    );
  }
  render() {
    return (
      <div className='footer'>
        <img src="./images/facebookIcon.svg" alt="facebookIcon"/>
        <img src='./images/DecentLOGO.png' alt='logo'/>
        <img onClick={this.instaClick.bind(this)} src="./images/instagramLogo.svg" alt="instagramIcon"/>
      </div>
    )
  }
}

export default Footer;