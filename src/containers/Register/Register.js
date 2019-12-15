import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';

class Register extends Component { 
	render () {
		return (
			<Form className={styles.loginForm}>
				<h1><span className={styles.logoName}>Register</span></h1>
				<FormGroup>
					<Input type="email" placeholder="Email"></Input>
				</FormGroup>
				<FormGroup>
					<Input type="password" placeholder="Password"></Input>
				</FormGroup>
				<Link to ="/Info">
					<Button className={styles.Button}>Sign In</Button>
				</Link>
				<div className="text-center pt-3">Or Log In with</div>
				<div className={styles.FacebookGoogle}>
					<Button >Sign In with Google</Button>
					<Button >Sign In with Facebook</Button>
				</div>
			</Form>
		);
	}
}

export default Register;