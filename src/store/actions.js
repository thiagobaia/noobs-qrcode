import axios from "axios";

const baseUrl = ('https://rest-api-noobs.herokuapp.com')

export const registerUser = ({ commit }, registerUser) => {
  axios.post(baseUrl + '/user/register', registerUser ).then((response) => {
      commit("SET_REGISTER_USER", response.data);
    });
};

