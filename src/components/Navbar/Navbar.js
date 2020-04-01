import React, { Component } from 'react';

import './Navbar.css';
import Footer from './Footer';
import Menu from './Menu';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';

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
      const menu = ['Services','Why Find Your House','À propos','Contact'];
      const menuItems = menu.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>);
      });
      
      return(
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='#c9d700'/>
            <div style={styles.logo}>Find Your House</div>
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
  
  