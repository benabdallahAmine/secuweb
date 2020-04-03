import React, { Component } from 'react';

import css from './Navbar.css';
import Footer from './Footer';
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';
import AuthService from "../../services/auth.service";

class Navbar extends Component {
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
          None:{
            border:'none',
            background: '#131f28',
            color:'#c9d700'
            
          },
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
      const menu = ['Services','Why Find Your House','À propos','Contact'];
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>);
      });
      /*<MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='#c9d700'/>*/
      return(
        <div>
          <div style={styles.container}>
            
            <div style={styles.logo}>Trouve Ton Logement</div>
            
            <a href="/" style={styles.None} onClick={() => {this.logOut();}}>
                    Déconnexion
            </a>
          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
          <div>
            <Footer />
          </div>
        </div>
      )
    }
  }

export default Navbar;
  
  
