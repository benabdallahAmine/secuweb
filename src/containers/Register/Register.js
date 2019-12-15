import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import styles from './Register.css';


const INITIAL_STATE = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    number: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    zip: "",
    country: "",
    file: ""
  };

// nice way of changing properties
const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});


class Register extends Component {
    state = {
        ...INITIAL_STATE
    };

    onSubmit = event => {
        const { email, password, firstName, lastName,
            number,addressOne,addressTwo,city,zip,country,file} = this.state;
        const { history } = this.props;

        auth
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            db.doCreateUser(authUser.user.uid, username, email)
              .then(() => {
                this.setState({
                  ...INITIAL_STATE
                });
                
                // Redirect to home page
                history.push(routes.HOME);
              })
              .catch(error => {
                this.setState(byPropKey("error", error));
                this.timer();
              });
          })
          .catch(err => {
            this.setState(byPropKey("error", err));
            this.timer();
          });
    
        event.preventDefault();
      };

    timer = () => {
        this.setState({
            showingAlert: true
        });
        setTimeout(() => {
            this.setState({
            showingAlert: false
            });
        }, 4000);
    };


    render () {
        return (
            <React.Fragment>
                <form className={styles.Register}>
                    <div className={styles.logoName}>Register</div>
                    <Grid container spacing={3} className={styles.textField}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                            value={firstName}
                            onChange={e =>
                              this.setState(byPropKey("firstName", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="lname"
                            value={lastName}
                            onChange={e =>
                              this.setState(byPropKey("lastName", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            id="email"
                            type="email"
                            label="Email"
                            fullWidth
                            autoComplete="email"
                            value={email}
                            onChange={e =>
                              this.setState(byPropKey("email", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            id="standard-password-input"
                            type="password"
                            label="Password"
                            fullWidth
                            autoComplete="current-password"
                            value={password}
                            onChange={e =>
                              this.setState(byPropKey("password", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            id="standard-number"
                            label="Number"
                            type="number"
                            fullWidth
                            autoComplete="current-number"
                            value={number}
                            onChange={e =>
                              this.setState(byPropKey("number", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                            value={addressOne}
                            onChange={e =>
                              this.setState(byPropKey("addressOne", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                            value={adressTwo}
                            onChange={e =>
                              this.setState(byPropKey("addressTwo", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                            value={city}
                            onChange={e =>
                              this.setState(byPropKey("city", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                            value={zip}
                            onChange={e =>
                              this.setState(byPropKey("zip", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                            value={country}
                            onChange={e =>
                              this.setState(byPropKey("country", e.target.value))
                            }
                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField 
                            required
                            type="file" 
                            name="file" 
                            id="exampleFile"
                            fullWidth
                            value={password}
                            onChange={e =>
                              this.setState(byPropKey("file", e.target.value))
                            }
                        />
                        </Grid>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

export default Register;