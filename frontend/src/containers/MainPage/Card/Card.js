import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import styles from '../Card/Card.css';
import Modal from '../ModalReservation/ModalReservation';

class card extends Component {
    state = {
        visible: false
    }

    showHandler = () => {
        this.setState({
            visible: true
        });
    }

    hideHandler = () => {
        this.setState({
            visible: false
        });
    }

    render() {
    return (
            <div>
                <Card className={styles.card}>
                    <div className={styles.overflow}>
                        <Card.Img src={this.props.imgsrc} className={styles.cardImg} />
                    </div>
                    <div className={styles.cardBody}>
                        <h5 style={{fontWeight: 'bolder'}}>{this.props.title}</h5>
                        <p className={styles.cardText}>
                            {this.props.paragraph}
                        </p>
                        <button onClick={this.showHandler} className={styles.Button}>Réserver</button>
                        <Modal 
                            visible={this.state.visible}
                            hideHandler={this.hideHandler}
                        />
                    </div>
                </Card>
            </div>
    )};
}

export default card;