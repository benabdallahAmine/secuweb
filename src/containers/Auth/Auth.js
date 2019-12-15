import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

import styles from './Auth.css';

class Auth extends Component { 
	render () {
		return (
			<Form className={styles.loginForm}>
				<h1><span className={styles.logoName}>Global Virtual Office</span></h1>
				<FormGroup>
					<Input type="email" placeholder="Email"></Input>
				</FormGroup>
				<FormGroup>
					<Input type="password" placeholder="Password"></Input>
				</FormGroup>
				<Button className={styles.Button}>Sign In</Button>
				<div className="text-center pt-3">Or login with</div>
				<SocialIcon className="mt-3 mb-3" network="google" />
				<SocialIcon className="mt-3 mb-3" network="facebook" />
				<div className="text-center">
					<a>Creat New Account</a>
				</div>
			</Form>
		);
	}
}

export default Auth;