import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import News from './News';
// import Portfolio from './Portfolio';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (<div className="App">
      <Header {...this.props}/>
      <div className="main-parts">
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About} exact/>
          <Route path="/News" component={News} exact/>
          <Route path="/Team" component={Team} exact/>
          <Route path="/Contact" component={Contact} exact/>
        </Switch>
      </div>
      <Footer />
    </div>);
  }
}

export default withRouter(App);
