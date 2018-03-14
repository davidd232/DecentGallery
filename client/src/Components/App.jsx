import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Shows from './Shows/Shows';
import Shop from './Shop/Shop';
import Media from './Media/Media';
import About from './About';
import Header from './Nav/Header';
import Footer from './Footer';
import Login from './OwnerComps/Login';
import ShowsOwner from './Shows/ShowsOwner';
import ShopOwner from './Shop/ShopOwner';
import MediaOwner from './Media/MediaOwner';
class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='main'>
          {localStorage.getItem('token') ?
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/showsOwner' component={ShowsOwner} />
              <Route path='/mediaOwner' component={MediaOwner} />
              <Route path='/shopOwner' component={ShopOwner} />
              <Route path='/about' component={About} />
              <Route path='/owner' component={Login} />
            </Switch>
            :
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/shows' component={Shows} />
              <Route path='/media' component={Media} />
              <Route path='/shop' component={Shop} />
              <Route path='/about' component={About} />
              <Route path='/owner' component={Login} />
            </Switch>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
