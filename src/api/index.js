import apisauce from 'apisauce';
import { naviMonitor } from './api.monitors';
import { Constants } from 'utils';

const baseURL = process.env.REACT_APP_API_URL;

const api = apisauce.create({
  baseURL,
  headers: {
    'Cache-Control': 'no-cache',
  },
  timeout: 1000000,
});

// @Monitors
api.addMonitor(naviMonitor);

export const privateRequest = ({ method, endpoint, params, options, contentType = 'application/json' }) => {
  const headers = options ? options.headers : {};

  return api[method](endpoint, params, {
    ...options,
    headers: {
      ...headers,
      'Content-Type': contentType,
    },
  });
};

export const privateGet = ({ endpoint, params, options, token }) =>
  privateRequest({ method: Constants.API_METHODS.GET, endpoint, params, options, token });
