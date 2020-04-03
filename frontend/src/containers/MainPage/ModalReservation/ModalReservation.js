import React, { Component } from 'react';

import styles from '../ModalReservation/ModalReservation.css';
import AuthService from "../../../services/auth.service";

class modal extends Component {
    constructor(props) {
        super(props);
        this.onChangeIdCard = this.onChangeIdCard.bind(this);
        this.state = {
            selectedFile: '',
            selectedFileName: '',
            hasError: false
          
        };
      }

    onChangeIdCard = (e) => {
        console.log(AuthService.getToken());
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0],
            selectedFileName: e.target.files[0].name
        });
        const formData = new FormData();
        formData.append('file', e.target.files[0]);
        console.log(formData);
        fetch('http://localhost:8080/uploadIdentityCardFile', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer ' + AuthService.getToken()
              }),
            body: formData
            
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
                window.location.reload();
            }
            else {
                this.state.hasError = true;
                alert("You are not authorized to upload this file");
                window.location.reload();
            }
        });
    };

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
                            <label style={{float: 'left', paddingLeft: '10%'}}>Votre Pièce d'Idendité :</label>
                            <label for="file" className={styles.labelFile}>Choisir un fichier</label>
                            <input id="file" type="file" name="file"  className={styles.inputFile} onChange={this.onChangeIdCard}></input>
                            <div className="file-preview">{this.state.selectedFileName}</div >
                        </div>
                    </div>
                </div>
            </div>
    )};
}
/** 
 * 
 * {this.state.filesIdCard.map((x, index) => (
                                <div key={index} className="file-preview">
                                {x.name}
                             </div>
                            ))}
 * 
 * 
 * 
 * 
 *   {this.state.fileMonthlyInc.map((x, index) => (
                                <div key={index} className="file-preview">
                                {x.name}
                             </div>
                            ))}
 * 
 * {this.state.filesTaxInc.map((x, index) => (
                                <div key={index} className="file-preview">
                                {x.name}
                             </div>
                            ))}
*/
export default modal;