import React, { Component } from 'react';
import styles from './Register.css';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar'; 

class Register extends Component { 
	render () {
		return (
			<div>
				<Navbar />
				<Form className={styles.loginForm}>
					<h1><span className={styles.logoName}>Créer un Compte</span></h1>
					<FormGroup>
						<Row>
							<Col>
								<Input required
									type="text" 
									placeholder="Prénom"
								></Input>
							</Col>
							<Col>
								<Input required
									type="text" 
									placeholder="Nom"
								></Input>	
							</Col>
						</Row>
						<Input required
						type="tel" 
						placeholder="Numéro de téléphone"
						></Input>
						<Input required
						type="email" 
						placeholder="Email"
						></Input>
						<Input required
						type="password" 
						placeholder="Mot de Passe"
						></Input>
						<Input required
						type="password" 
						placeholder="Confirmation du Mot de Passe"
						></Input>
					</FormGroup>
					<Button className={styles.Button}>Créer un Compte</Button>
				</Form>
			</div>
		);
	}
}

export default Register;

