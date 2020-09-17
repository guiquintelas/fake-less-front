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

export default api;
