import React, { Component } from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './Auth.css';
import Navbar from '../../components/Navbar/Navbar'; 
import AuthService from "../../services/auth.service";
class Auth extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
	
		this.state = {
		  email: "",
		  password: "",
		  loading: false,
		  message: ""
		};
	  }
	  onChangeEmail(e) {
		this.setState({
		  email: e.target.value
		});
	  }
	
	  onChangePassword(e) {
		this.setState({
		  password: e.target.value
		});
	  }
	
	  handleLogin(e) {
		e.preventDefault();
	
		this.setState({
		  message: "",
		  loading: true
		});
		AuthService.login(this.state.email, this.state.password).then(
			(data) => {
			  
			  this.props.history.push("/MainPage");
			  
			  window.location.reload();
			  console.log(data);
			},
			error => {
			  alert("Bad credentials");
			  const resMessage =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
	
			  this.setState({
				loading: false,
				message: resMessage
			  });
			}
		  );
		}


	render () {
		return (
			<div>
				<Navbar />
				<Form className={styles.loginForm} onSubmit={this.handleLogin}
				  ref={c => {
					this.form = c;
				  }}>
					<h1><span className={styles.logoName}>Se Connecter</span></h1>
					<FormGroup>
						<Input required 
						type="email" 
						placeholder="Email"
						value={this.state.email}
                    	onChange={this.onChangeEmail}
						></Input>
					</FormGroup>
					<FormGroup>
						<Input required 
						type="password" 
						placeholder="Mot de Passe"
						value={this.state.password}
                    	onChange={this.onChangePassword}
						></Input>
					</FormGroup>
					<Button className={styles.Button}>Connexion</Button>
					
					<div className="text-center pt-3"></div>
					<div>
						<Link to="/Register">
							<a>Créer un nouveau compte</a>
						</Link>
					</div>
					</Form>
				
			</div>
		);
	}
}

export default Auth;