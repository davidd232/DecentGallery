import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shows from './Shows';
import Shop from './Shop';
import Media from './Media';
import About from './About';
import Header from './Header';
import Footer from './Footer';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='main'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/shows' component={Shows} />
            <Route path='/media' component={Media} />
            <Route path='/shop' component={Shop} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
