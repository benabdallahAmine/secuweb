import React, { Component } from 'react';

import styles from './Calling.css';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Calling extends Component {

    render(){
        return (
            <div className={styles.Center}>
                <div className={styles.Rectangle}> 
                    <span><FontAwesomeIcon icon={faPhoneVolume} size="5x"/>Calling ...</span>
                </div>
            </div>
        )};
}

export default Calling;