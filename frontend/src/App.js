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
            <div >
            <h1>You are not authorized to access this page, please Sign in or Register</h1>
            <li >
              <Link to={"/"} >
                Login
              </Link>
            </li>

            <li >
              <Link to={"/Register"} >
                Sign Up
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
/*<Route path="/MainPage" component={MainPage} />
{currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/MainPage"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div >
                <h1>You are not authorized to access this page, please Sign in or Register</h1>
                <li >
                  <Link to={"/"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li >
                  <Link to={"/Register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
        )}*/
export default App;

