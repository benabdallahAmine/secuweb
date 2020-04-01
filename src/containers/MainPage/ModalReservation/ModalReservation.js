import React, { Component } from 'react';

import styles from '../ModalReservation/ModalReservation.css';

class modal extends Component {
    constructor() {
        super();
        this.onChangeIdCard = this.onChangeIdCard.bind(this);
        this.onChangeMonthlyInc = this.onChangeMonthlyInc.bind(this);
        this.onChangeTaxInc= this.onChangeTaxInc.bind(this);
        this.state = {
          filesIdCard: [],
          fileMonthlyInc: [],
          filesTaxInc: []
        };
      }
    
    onChangeIdCard = (e) => {
        var filesIdCard = e.target.files;
        var filesIdCardArr = Array.prototype.slice.call(filesIdCard);
        this.setState({
            filesIdCard: [...this.state.filesIdCard, ...filesIdCardArr]
        });
    }

    onChangeMonthlyInc = (e) => {
        var fileMonthlyInc = e.target.files;
        var fileMonthlyIncArr = Array.prototype.slice.call(fileMonthlyInc);
        this.setState({
            fileMonthlyInc: [...this.state.fileMonthlyInc, ...fileMonthlyIncArr]
        });
    }

    onChangeTaxInc = (e) => {
        var filesTaxInc = e.target.files;
        var filesTaxIncArr = Array.prototype.slice.call(filesTaxInc);
        this.setState({
            filesTaxInc: [...this.state.filesTaxInc, ...filesTaxIncArr]
        });
    }

    render() {
    return (
            <div className={styles.modal} 
            style = {{
                transform: this.props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
                opacity: this.props.visible ? '1' : '0'
            }}>
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <span onClick={this.props.hideHandler} className={styles.btnClose}>&times;</span>
                        <h6>Veuillez nous transmettre ces documents :</h6>
                    </div>
                    <div className={styles.modalBody}>
                        <div>
                            <label style={{float: 'left'}}>Votre Pièce d'Idendité :</label>
                            <label for="fileIdCard" className={styles.labelFile}>Choose a file</label>
                            <input id="fileIdCard" className={styles.inputFile} type="file" onChange={this.onChangeIdCard}></input>
                            {this.state.filesIdCard.map((x, index) => (
                                <div key={index} className="file-preview">
                                {x.name}
                             </div>
                            ))}
                        </div>
                        <div>
                            <label style={{float: 'left'}}>Justificatif de Votre Revenu Mensuel :</label>
                            <label for="fileMonthlyInc" className={styles.labelFile}>Choose a file</label>
                            <input id="fileMonthlyInc" className={styles.inputFile} type="file" onChange={this.onChangeMonthlyInc}></input>
                            {this.state.fileMonthlyInc.map((x, index) => (
                                <div key={index} className="file-preview">
                                {x.name}
                             </div>
                            ))}
                        </div>
                        <div>
                            <label style={{float: 'left'}}>Votre dernier Avis d'impot sur le revenu :</label>
                            <label for="fileTaxInc" className={styles.labelFile}>Choose a file</label>
                            <input id="fileTaxInc" className={styles.inputFile} type="file" onChange={this.onChangeTaxInc}></input>
                            {this.state.filesTaxInc.map((x, index) => (
                                <div key={index} className="file-preview">
                                {x.name}
                             </div>
                            ))}
                        </div>
                        <button className={styles.Button}>Envoyer</button>
                    </div>
                </div>
            </div>
    )};
}

export default modal;