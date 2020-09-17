/* eslint-disable no-console */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});

api.interceptors.response.use(
  (_) => _,
  (error) => {
    console.error(error);
    console.error(error.response);

    // api returns only a string as response
    // should handle as the error msg
    if (typeof error.response?.data === 'string') {
      return Promise.reject(Error(error.response.data));
    }

    // api returns a error array
    // should handle as the error msg
    if (Array.isArray(error.response?.data)) {
      const firstError = error.response.data[0];
      return Promise.reject(Error(firstError.description ?? 'Unexpected Error'));
    }

    // api returns an array os errors
    // should handle as validation error
    // therefore something was sent wrong
    if (error.response?.data.errors) {
      console.error('Validation Error');
      console.error(error.response?.data.errors);
    }

    return Promise.reject(Error('Inernal Error'));
  },
);

export default api;
