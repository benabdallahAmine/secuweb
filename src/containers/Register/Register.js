import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.css';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import Google from '../../assets/images/Google.png';
import Facebook from '../../assets/images/Facebook.png';

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
					<Button className={styles.Button}>Register</Button>
				</Link>
				<div className={styles.line}><span>Or LogIn with</span></div>
				<div className={styles.FacebookGoogle}>
					<Button ><img src={Google} className={styles.Google}/>Sign In with Google</Button>
					<Button ><img src={Facebook} className={styles.Facebook}/>Sign In with Facebook</Button>
				</div>
			</Form>
		);
	}
}

export default Register;