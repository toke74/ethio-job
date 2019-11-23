import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/Nav/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import JobDashoard from './components/Jobs/JobDashoard/JobDashoard';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <div style={{ paddingTop: '60px' }}>
          <Switch>
            <Route path="/find-job" component={JobDashoard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
