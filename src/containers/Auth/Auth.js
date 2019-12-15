import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
import styles from './Auth.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

const INITIAL_STATE = {
	email: "",
	password: "",
};

class Auth extends Component {
	state = { ...INITIAL_STATE };

	onSubmit = event => {
		const { email, password } = this.state;
		auth
		  .doSignInWithEmailAndPassword(email, password)
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
				<h1><span className={styles.logoName}>Global Virtual Office</span></h1>
				<FormGroup>
					<Input type="email" placeholder="Email"></Input>
				</FormGroup>
				<FormGroup>
					<Input type="password" placeholder="Password"></Input>
				</FormGroup>
				<Button className={styles.Button}>Sign In</Button>
				<div className="text-center pt-3">Or login with</div>
				<SocialIcon className="mt-3 mb-3" network="google" onClick={this.googleLogin}/>
				<SocialIcon className="mt-3 mb-3" network="facebook" />
				<div className="text-center">
					<Link to="/Register">
						<a>Creat New Account</a>
					</Link>
				</div>
			</Form>
		);
	}
}

export default Auth;