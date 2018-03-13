import React, { Component } from 'react';

class Cards extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          <img src='./images/WebHome.jpeg' />
          <img src='./images/WebHome.jpeg' />
          <img src='./images/WebHome.jpeg' />
        </ul>
      </div>
    )
  }
}

export default Cards;


// At some point this is going to map over the data of 
// show cards that is given. It will then display in the CardHolder
// component while is held in the shows component.