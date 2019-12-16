import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from "../../helpers/firebase";
import styles from './Register.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import Google from '../../assets/images/Google.png';
import Facebook from '../../assets/images/Facebook.png';

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
				<Link to ="/Info">
					<Button className={styles.Button}>Register</Button>
				</Link>
				<div className={styles.line}><span>Or LogIn with</span></div>
				<div className={styles.FacebookGoogle}>
					<Button ><img src={Google} className={styles.Google} onClick={this.googleLogin}/>Sign In with Google</Button>
					<Button ><img src={Facebook} className={styles.Facebook}/>Sign In with Facebook</Button>
				</div>
			</Form>
		);
	}
}

export default Register;