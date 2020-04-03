import React, { Component } from 'react';
import styles from './Register.css';
import { Button, Form, FormGroup, Input, Row, Col } from 'reactstrap';
import Navbar from '../../components/Navbar/Navbar'; 
import AuthService from "../../services/auth.service";
import { Link } from 'react-router-dom';

class Register extends Component { 
	constructor(props) {
		super(props);
		this.handleRegister = this.handleRegister.bind(this);
		this.onChangeFirstName = this.onChangeFirstName.bind(this);
		this.onChangeLastName = this.onChangeLastName.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeNumberPhone = this.onChangeNumberPhone.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onChangeRePassword = this.onChangeRePassword.bind(this);
	
		this.state = {
		  firstName: "",
		  lastName:"",
		  email: "",
		  numberPhone: "",
		  password: "",
		  repassword: "",
		  successful: false,
		  message: "",
		  hasError: false
		};
	  }

	  onChangeFirstName(e) {
		this.setState({
			firstName: e.target.value
		});
	  }
	
	  onChangeLastName(e) {
		this.setState({
			lastName: e.target.value
		});
	  }
	
	  onChangeEmail(e) {
		this.setState({
		  email: e.target.value
		});
	  }
	  onChangeNumberPhone(e) {
		this.setState({
		  numberPhone: e.target.value
		});
	  }
	
	  onChangePassword(e) {
		this.setState({
		  password: e.target.value
		});
	  }
	
	  onChangeRePassword(e) {
		this.setState({
		  repassword: e.target.value
		});
	  }

	  handleRegister(e) {
		e.preventDefault();
	
		this.setState({
		  message: "",
		  successful: false
		});
		
		  AuthService.register(
			this.state.firstName,
			this.state.lastName,
			this.state.email,
			this.state.numberPhone,
			this.state.password,
			this.state.repassword
		  ).then(
			response => {
			this.props.history.push("/");
			this.setState({
				message: response.data.message,
				successful: true
			  });

			},
			error => {
			  const resMessage =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
			  console.log(resMessage)
			  this.setState({
				successful: false,
				message: resMessage,
				hasError: true,
			  });
			}
		  );
	  }

	render () {	
		if (this.state.hasError){
			if(this.state.message.startsWith("JSON")){
				return(<div>
					<h1>Bad registration form</h1>
					<h1><span className={styles.logoName}>Bad Request, please contact the administrator</span></h1>
					<a href="/Register">Go back to registration</a>
					</div>)
			}
			return(
			<div>
				<h1>Bad registration form</h1>
				<h1><span className={styles.logoName}>{this.state.message}</span></h1>
				<a href="/Register">Go back to registration</a>
			</div>
			)
		}	
		return (
			<div>
				<Navbar />
				<Form className={styles.loginForm}
				  onSubmit={this.handleRegister}
				  ref={c => {
					this.form = c;
				  }}>
					  
					<h1><span className={styles.logoName}>Créer un Compte</span></h1>
					<FormGroup>
						<Row>
							<Col>
								<Input required
									type="text" 
									placeholder="Prénom"
									value={this.state.firstName}
                    				onChange={this.onChangeFirstName}
								></Input>
							</Col>
							<Col>
								<Input required
									type="text" 
									placeholder="Nom"
									value={this.state.lastName}
                    				onChange={this.onChangeLastName}
								></Input>	
							</Col>
						</Row>
						<Input required
						type="text" 
						placeholder="Numéro de téléphone"
						value={this.state.numberPhone}
						onChange={this.onChangeNumberPhone}
						
						></Input>
						<Input required
						type="email" 
						placeholder="Email"
						value={this.state.email}
                    	onChange={this.onChangeEmail}
						></Input>
						<Input required
						type="password" 
						placeholder="Mot de Passe"
						value={this.state.password}
                    	onChange={this.onChangePassword}
						></Input>
						<Input required
						type="password" 
						placeholder="Confirmation du Mot de Passe"
						value={this.state.repassword}
                    	onChange={this.onChangeRePassword}
						></Input>
					</FormGroup>
					<Button className={styles.Button}>Créer un Compte</Button>
					<div className={styles.line}><span>Vous avez déjà un compte ?</span></div>
					<div>
						<Link to="/">
							<a>Se Connecter</a>
						</Link>
					</div>
				</Form>
			</div>
		);
	}
}

export default Register;

