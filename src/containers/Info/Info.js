import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import styles from './Info.css';
import { Button } from 'reactstrap';

export default function AddressForm() {
  return (
    <React.Fragment>
        <form className={styles.Register}>
            <div className={styles.logoName}>Personal Info</div>
            <Grid container spacing={3} className={styles.textField}>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="outlined-basic"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="fname"
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
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="address2"
                    name="address2"
                    label="Address line 2"
                    fullWidth
                    autoComplete="billing address-line2"
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
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    required
                    defaultValue="Upload Passport/ID"
                    id="passportId"
                    fullWidth
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    required
                    type="file" 
                    name="file" 
                    id="exampleFile"
                    color="black"
                    fullWidth
                />
                </Grid>
                <Grid item xs={12}>
                <Button className={styles.Button}>Send</Button>
                </Grid>
            </Grid>
        </form>
    </React.Fragment>
  );
}