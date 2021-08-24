import axios from 'axios';

const ApiRequestMethod = {
  post: axios.post,
  put: axios.put,
  get: axios.get,
  url: 'backend',
};

export default ApiRequestMethod;
