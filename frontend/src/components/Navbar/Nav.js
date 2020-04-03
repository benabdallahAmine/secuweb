import React, { Component } from 'react';

import css from './Navbar.css';
import Footer from './Footer';
import AuthService from "../../services/auth.service";

class Nav extends Component {
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
      }
    }
    
    handleMenuClick() {
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      this.setState({menuOpen: false});
    }

    logOut() {
      AuthService.logout();
    }
    
    render(){
      const styles= 
        {
          container:{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 0.9,
            display:'flex',
            alignItems:'center',
            background: '#131f28',
            width: '100%',
            color: '#c9d700',
            fontFamily:'Cormorant Garamond',
            fontSize:'15px'
          },
          logo: {
            margin: '0 auto',
          },
        }
        
      return(
        <div>
          <div style={styles.container}>
            <div style={styles.logo}>Trouve Ton Logement</div>
            <a href="/" className={css.signOut} style={{textDecoration: 'none'}} onClick={() => {this.logOut();}}>Déconnexion</a>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )
    }
  }

export default Nav;
  
  
