import request from './fetch.js';
import { configureStore } from '../store/index.js';

export const run = request;

export const requestWithToken = (url, params = {}) => {
  const store = configureStore();
  const { user } = store.getState();
  const { token } = user;
  if (token) {
    return request(url, { ...params, token });
  }
};
