import axios from "axios";

const API_URL_LOGIN = "http://localhost:8080/signing";
const API_URL_REGISTER = "http://localhost:8080/register";

class AuthService {
  login(email, password) {
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

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, email, numberPhone, password, repassword) {
    return axios.post(API_URL_REGISTER , {
      firstName,
      lastName,
      email,
      numberPhone,
      password,
      repassword
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken() {
    return JSON.parse(localStorage.getItem('user')).token;
  }
}

export default new AuthService();