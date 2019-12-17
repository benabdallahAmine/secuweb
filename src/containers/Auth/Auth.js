import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import { auth, googleProvider, faceProvider } from "../../helpers/firebase";
import { Link } from 'react-router-dom';
import styles from './Auth.css';

const INITIAL_STATE = {
	email: "",
	password: "",
};

const encodeGetParams = p => 
  Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value
});


class Auth extends Component {
	state = { ...INITIAL_STATE };

	sendEmailVerification = () => {
		console.log("Sending verification");
		auth.currentUser.sendEmailVerification({
			url: "http://localhost:3000"
		});
	}

	getRefreshToken = () => {
		// Request a token from the server
		const values = {
			'firebase_id': sessionStorage.getItem('firebase_id'),
		}
		
		const options = {
			headers: {
			  'Content-type': 'application/json',
			  'Accept': 'application/json',
			  'Access-Control-Allow-Origin' : "*"
			},
			method: 'GET'
		}
		
		// Add User
		fetch('http://127.0.0.1:5000/login?' + encodeGetParams(values), options)
			.then(response => {
				return response.text()
			})
			.then(response => {
				console.log("Got response" + response);
				const data = JSON.parse(response);
				console.log(data);

				if (data[1] !== 200) {
					console.log("Message: " + data[0].message)
					console.log("Error");
					return;
				}

				// Store the JWT tokens
				sessionStorage.setItem("access_token", data[0].access_token);
				sessionStorage.setItem("refresh_token", data[0].refresh_token);

				this.setState({
					...INITIAL_STATE
				});
			})
			.catch(error => {
				console.log("DB error: " + error);
			})
	}

	onSubmit = event => {
		const { email, password } = this.state;
		auth
		  .signInWithEmailAndPassword(email, password)
		  .then(data => {
			console.log("Successfull User creation");
			console.log("Firebase User ID :", data.user.uid);
			sessionStorage.setItem('firebase_id', data.user.uid);
			this.getRefreshToken();
			// We go to the home page
			this.props.history.push("Page1");
		  })
		  .catch(error => {
			  console.log("Standard Login error " + error)
		  });
	
		event.preventDefault();
	};

	googleLogin = () => {
		auth
		  .signInWithPopup(googleProvider)
		  .then(data => {
			console.log("Google Login auth: " + data);
			console.log("Firebase User ID :", data.user.uid);
			sessionStorage.setItem('firebase_id', data.user.uid);
			this.getRefreshToken();
			// We go to the home page
			this.props.history.push("Page1");
		  })
		  .catch(error => {
			  console.log("Google Login error: " + error);
		  });
	};

	faceLogin = () => {
		auth
		  .signInWithPopup(faceProvider)
		  .then(data => {
			console.log("Facebook Login auth: " + data);
			console.log("Firebase User ID :", data.user.uid);
			sessionStorage.setItem('firebase_id', data.user.uid);
			this.getRefreshToken();
			// We go to the home page
			this.props.history.push("Page1");
		  })
		  .catch(error => {
			  console.log("Facebook Login error: " + error);
		  });
	};

	render () {
		const { email, password} = this.state;

		return (
			<Form className={styles.loginForm}>
				<h1><span className={styles.logoName}>Global Virtual Office</span></h1>
				<FormGroup>
					<Input required type="email" 
					placeholder="Email"
					value={email}
					onChange={e =>
					  this.setState(byPropKey("email", e.target.value))
					}></Input>
				</FormGroup>
				<FormGroup>
					<Input required type="password" 
					placeholder="Password"
					value={password}
					onChange={e =>
					  this.setState(byPropKey("password", e.target.value))
					}
					></Input>
				</FormGroup>
				<Button className={styles.Button} onClick={this.onSubmit}>Sign In</Button>
				<div className="text-center pt-3">Or login with</div>
				<SocialIcon className={styles.Google} network="google" onClick={this.googleLogin}/>
				<SocialIcon className={styles.Facebook} network="facebook" onClick={this.faceLogin}/>
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