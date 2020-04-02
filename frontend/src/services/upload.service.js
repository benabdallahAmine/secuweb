import axios from "axios";

const API_URL_UPLOAD = "http://localhost:8080/upload";

class UploadService {
  upload(email, password) {
    return axios.post(API_URL_LOGIN , {
        email,
        password
      })
      .then(response => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response);
        return response.data;
      });
  }

}

export default new UploadService();