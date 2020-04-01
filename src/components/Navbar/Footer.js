import React from 'react';
import './Navbar.css';

 /* Footer.jsx */
function footer() {
    const styles = {
      footer: {
        fontFamily:`'Cormorant Garamond', serif`,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginTop: '1rem',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        color: 'black',
      },
      
      text: {
        padding: '0.5rem',
        fontWeight: 'bold'
      }
    }  
    
    return (
      <div style={styles.footer}>
        <div style={styles.text}>IMT Atlantique &copy; 2020</div>
      </div>
    )
}

export default footer;