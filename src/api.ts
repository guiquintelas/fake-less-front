/* eslint-disable no-console */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const camelCaseData: { [key: string]: any } = {};

    // converts to C# case
    // Ex password => Password
    // Ex fullNmae => FullName
    Object.keys(config.data).forEach((key) => {
      const firstLetter = key[0];
      const newKey = firstLetter.toUpperCase() + key.substr(1);
      camelCaseData[newKey] = config.data[key];
    });

    return config;
  },
  (_) => _,
);

api.interceptors.response.use(
  (_) => _,
  (error) => {
    // api returns only a string as response
    // should handle as the error msg
    if (typeof error.response.data === 'string') {
      console.error(error);
      console.error(error.response);
      return Promise.reject(Error(error.response.data));
    }

    // api returns an array os errors
    // should handle as validation error
    // therefore something was sent wrong
    if (error.response.data.errors) {
      console.error('Validation Error');
      console.error(error.response.data.errors);
    } else {
      // any ohter situation log
      // entire error and response
      console.error(error);
      console.error(error.response);
    }

    return Promise.reject(Error('Inernal Error'));
  },
);

export default api;
