import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";
export default {
  getAllGenre() {
    return axios({
      method: "get",
      url: "genre"
    })
      .then(response => response.data)
      .catch(error => error);
  }
};
