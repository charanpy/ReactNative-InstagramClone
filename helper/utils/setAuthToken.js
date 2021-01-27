import axios from 'axios';

const setAuthToken = (token) => {
  console.log('token', token);
  if (token) {
    axios.defaults.headers.common["authorization"] = 'Bearer ' + token;
  } else {
    delete axios.defaults.headers.common['authorization'];
  }
};

export default setAuthToken;
