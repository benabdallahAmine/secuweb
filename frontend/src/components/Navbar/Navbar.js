import React, { Component } from 'react';

import './Navbar.css';
import Footer from './Footer';

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

      return(
        <div>
          <div style={styles.container}>
            <div style={styles.logo}>Trouve Ton Logement</div>
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )
    }
  }

export default Navbar;
  
  
