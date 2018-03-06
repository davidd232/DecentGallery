import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shows from './Shows';
import Shop from './Shop';
import Media from './Media';
import About from './About';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/shows' component={Shows}/>
          <Route path='/media' component={Media}/>
          <Route path='/shop' component={Shop}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    )
  }
}

export default App;
