import React, {Component, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';

import NavigationBar from './components/Nav/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import JobDashoard from './components/Jobs/JobDashoard/JobDashoard';

class App extends Component {
  render () {
    return (
      <Fragment>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <div style={{paddingTop: '60px'}}>
          <Switch>
            <Route path="/find-job" component={JobDashoard} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;
