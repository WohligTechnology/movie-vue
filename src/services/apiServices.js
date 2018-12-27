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
  },
  getGenre(id) {
    return axios({
      method: "get",
      url: "genre/" + id
    })
      .then(response => response.data)
      .catch(error => error);
  },
  editGenre(id, name) {
    return axios({
      method: "put",
      url: "genre/" + id,
      data: {
        name: name
      }
    })
      .then(response => response.data)
      .catch(error => error);
  }
};
