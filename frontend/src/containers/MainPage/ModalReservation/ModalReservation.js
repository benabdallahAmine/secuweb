import React, { Component } from 'react';

import styles from '../ModalReservation/ModalReservation.css';
import AuthService from "../../../services/auth.service";
import {
    useHistory
  } from "react-router-dom";

class modal extends Component {
    constructor(props) {
        super(props);
        this.onChangeIdCard = this.onChangeIdCard.bind(this);
        //this.onChangeMonthlyInc = this.onChangeMonthlyInc.bind(this);
        //this.onChangeTaxInc= this.onChangeTaxInc.bind(this);
        this.state = {
            selectedFile: '',
            hasError: false
          
        };
      }
    
    /*onChangeIdCard = (e) => {
        var filesIdCard = e.target.files;
        var filesIdCardArr = Array.prototype.slice.call(filesIdCard);
        this.setState({
            filesIdCard: [...this.state.filesIdCard, ...filesIdCardArr]
        });
    ¨*/
    
    onChangeIdCard = (e) => {
        console.log(AuthService.getToken());
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
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

    /*onChangeMonthlyInc = (e) => {
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
    }*/

    /*handleUpload(e) {
		e.preventDefault();
		AuthService.login(this.state.email, this.state.password).then(
			(data) => {
			  window.location.reload();
			  console.log(data);
			},
			error => {
			  console.log(error + "NOOOOOOOOO");
			  const resMessage =
				(error.response &&
				  error.response.data &&
				  error.response.data.message) ||
				error.message ||
				error.toString();
			}
		  );
		}*/
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
                            <label style={{float: 'left'}}>Votre Pièce d'Idendité (format PDF) :</label>
                            <label for="file" className={styles.labelFile}></label>
                            <input type="file" name ="file" onChange={this.onChangeIdCard}></input>
                            
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