import React , { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './pages/home';
import Header from './header';
import Footer from './footer';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </main>
)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default connect(null, null)(App);
