import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Auth.css';
import Navbar from '../../components/Navbar/Navbar'; 

class Auth extends Component {
	render () {
		return (
			<div>
				<Navbar />
				<Form className={styles.loginForm}>
					<h1><span className={styles.logoName}>Se Connecter</span></h1>
					<FormGroup>
						<Input required 
						type="email" 
						placeholder="Email"
						></Input>
					</FormGroup>
					<FormGroup>
						<Input required 
						type="password" 
						placeholder="Mot de Passe"
						></Input>
					</FormGroup>
					<Button className={styles.Button}>Sign in</Button>
					<div className="text-center pt-3"></div>
					<div>
						<Link to="/Register">
							<a>Creat New Account</a>
						</Link>
					</div>
				</Form>
			</div>
		);
	}
}

export default Auth;