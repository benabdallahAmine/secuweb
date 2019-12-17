import React, { Component } from 'react';

import styles from './ChooseNumber.css';
import { Form, FormGroup, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

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
                <Link to="/Page1">
					<Button className={styles.Button}>Go</Button>
				</Link>
			</Form>
		);
	}
}

export default Auth;