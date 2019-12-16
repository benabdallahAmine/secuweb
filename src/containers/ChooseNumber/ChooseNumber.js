import React, { Component } from 'react';

import styles from './ChooseNumber.css';
import { Form, FormGroup, Button } from 'reactstrap';

class Auth extends Component { 
	render () {
		return (
			<Form className={styles.loginForm}>
				<h1><span className={styles.logoName}>Choose Your Phone Number</span></h1>
				<FormGroup>
					<select>
                        <option value="id">Choose Phone Number</option>
                        <option value="number1">+33 6 41 51 62 91</option>
                        <option value="number2">+33 6 42 52 65 99</option>
                    </select>
				</FormGroup>
                <h1><span className={styles.logoName}>Choose Your Fax Number</span></h1>
				<FormGroup>
					<select>
                        <option value="id">Choose Fax Number</option>
                        <option value="numberFax1">none</option>
                        <option value="numberFax1">+33 1 44 55 65 78</option>
                        <option value="audi">+33 1 44 34 56 67</option>
                    </select>
				</FormGroup>
                <Button className={styles.Button}>Send</Button>
			</Form>
		);
	}
}

export default Auth;