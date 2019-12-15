import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Page1 from './containers/Page1/Page1';
import Call from './containers/Call_Page/Call/Call';
import Calling from './containers/Calling_Page/Calling';
import Auth from './containers/Auth/Auth';
import Register from './containers/Register/Register';
import Info from './containers/Info/Info';

class App extends Component {
  render() {
    return (
      <div id='root'>
        <Navbar />
        <Switch>
          <Route path="/Info" component={Info} />
          <Route path="/Register" component={Register} />
          <Route path="/Auth" component={Auth} />
          <Route path="/Calling" component={Calling} />
          <Route path="/Call" component={Call} />
          <Route path="/" exact component={Page1} />
        </Switch>
      </div>
    );
  }
}

export default App;

