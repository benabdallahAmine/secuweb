import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthService from "./services/auth.service";
import MainPage from './containers/MainPage/MainPage';
import Auth from './containers/Auth/Auth';
import Register from './containers/Register/Register';
import { BrowserRouter as Router, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser} = this.state;
    return (
      <div id='root'>
        <Router>
        <Switch>
          <Route path="/Register" component={Register} />
          <Route path="/" exact component={Auth} />
          {currentUser ? (<Route path="/MainPage" exact component={MainPage} />):(
            <div>
            <h4>Vous n'êtes pas autorisé à accéder à cette page, veuillez vous connecter ou vous inscrire</h4>
            <li >
              <Link to={"/"} >
                Se connecter
              </Link>
            </li>
            <li >
              <Link to={"/Register"} >
                Créer un compte
              </Link>
            </li>
          </div>
          )}
        </Switch>        
        </Router>
      </div>
    );
  }
}

export default App;

