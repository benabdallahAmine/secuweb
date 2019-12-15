import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const INITIAL_STATE = {
	email: "",
	password: "",
};

class Register extends Component { 
    state = { ...INITIAL_STATE };

    onSubmit = event => {
		const { email, password } = this.state;
		auth
		  .doCreateUserWithEmailAndPassword(email, password)
		  .then((authUser) => {
			console.log("Standard Login auth " + error)
		  })
		  .catch(error => {
			  console.log("Standard Login error " + error)
		  });
	
		event.preventDefault();
	};

	googleLogin = () => {
		auth
		  .doGoogleSignIn()
		  .then(authUser => {
			console.log("Google Login auth: " + authUser);
		  })
		  .catch(error => {
			  console.log("Google Login error: " + error);
		  });
	};

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
					<Button className={styles.Button}>Register</Button>
				</Link>
				<div className="text-center pt-3">Or Register with</div>
				<SocialIcon className="mt-3 mb-3" network="google" onClick={this.googleLogin}/>
				<SocialIcon className="mt-3 mb-3" network="facebook" />
			</Form>
		);
	}
}

export default Register;