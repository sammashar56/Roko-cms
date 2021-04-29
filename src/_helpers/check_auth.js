import axios from 'axios';

const checkToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
    console.log(token);
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"]
  }
};

export default checkToken;