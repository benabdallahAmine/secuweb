import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import styles from './Info.css';
import { Button } from 'reactstrap';


const INITIAL_STATE = {
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


class Info extends Component {
    state = {
        ...INITIAL_STATE
    };

    onSubmit = event => {
        const {firstName, lastName,
            number,addressOne,addressTwo,city,zip,country,file} = this.state;
        const { history } = this.props;

        db.doCreateUser(authUser.user.uid, username, email)
        .then(() => {
          this.setState({
            ...INITIAL_STATE
          });
        })
        .catch(error => {
            console.log("DB error: " + error);
        });


    
        event.preventDefault();
    };

    render () {
        return (
            <React.Fragment>
                <form className={styles.Register}>
                    <div className={styles.logoName}>Info</div>
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
                            value={addressTwo}
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
                        />
                        </Grid>
                        <Button className={styles.Button}>Send</Button>
                    </Grid>
                </form>
            </React.Fragment>
        );
    }
}

export default Info;