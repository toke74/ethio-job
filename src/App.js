import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';

import NavigationBar from './components/Nav/NavigationBar/NavigationBar';
import Home from './components/Home/Home';

class App extends Component {
  render () {
    return (
      <Fragment>
        <NavigationBar />
        <Route exact path="/" component={Home} />
      </Fragment>
    );
  }
}

export default App;
