import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from "../../helpers/firebase";
import styles from './Register.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const INITIAL_STATE = {
	email: "",
	password: "",
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});

class Register extends Component { 
	state = { ...INITIAL_STATE };

    onSubmit = event => {
		const { email, password } = this.state;
		console.log("Using email: " + email);

		auth
		  .createUserWithEmailAndPassword(email, password)
		  .then(data => {
			console.log("Successfull User creation");
			console.log("Firebase User ID :", data.user.uid);
			sessionStorage.setItem('firebase_id', data.user.uid);
			sessionStorage.setItem('email', data.user.email);
			// We go to the info page
			this.props.history.push("info");
		  })
		  .catch(error => {
			  console.log("Standard Login error " + error);
		  });
	
		event.preventDefault();
	};

	googleLogin = () => {
		auth
		  .signInWithPopup(googleProvider)
		  .then(data => {
			console.log("Google Login Successfull");
			console.log("Firebase User ID :", data.user.uid);
			sessionStorage.setItem('firebase_id', data.user.uid);
			sessionStorage.setItem('email', data.user.email);
			// We go to the info page
			this.props.history.push("info");
		  })
		  .catch(error => {
			  console.log("Google Login error: " + error);
		  });
	};

	render () {
		const { email, password} = this.state;

		return (
			<Form className={styles.loginForm} onSubmit={this.onSubmit}>
				<h1><span className={styles.logoName}>Register</span></h1>
				<FormGroup>
					<Input type="email" 
					placeholder="Email"
					value={email}
					onChange={e =>
					  this.setState(byPropKey("email", e.target.value))
					}></Input>
				</FormGroup>
				<FormGroup>
					<Input type="password" 
					placeholder="Password"
					value={password}
					onChange={e =>
					  this.setState(byPropKey("password", e.target.value))
					}></Input>
				</FormGroup>
				<Button className={styles.Button}>Register</Button>
				<div className="text-center pt-3">Or Register with</div>
				<SocialIcon className="mt-3 mb-3" network="google" onClick={this.googleLogin}/>
				<SocialIcon className="mt-3 mb-3" network="facebook" />
			</Form>
		);
	}
}

export default Register;