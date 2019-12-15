import React, { Component } from 'react';

import Keyboard from '../Keyboard/Keyboard';
import styles from './Call.css';

class Call extends Component {
    state = {
        numberClicked: []
    }

    clickNumber = (number) => { 
        let callNumber = this.state.numberClicked
        callNumber.push(number)
        console.log(callNumber)
        this.setState({
            numberClicked: callNumber
        })
    }

    deleteNumber = () => {
        let callNumber = this.state.numberClicked
        callNumber.pop()
        console.log(callNumber)
        this.setState({
            numberClicked: callNumber
        })
    }

    render(){
        return (
            <div className={styles.Center}>
                <div className={styles.Rectangle}>{this.state.numberClicked}</div>
                <Keyboard 
                    numbers={this.state.numbers} 
                    action={this.clickNumber}
                    remove={this.deleteNumber} /> 
            </div>
        )};
}

export default Call;