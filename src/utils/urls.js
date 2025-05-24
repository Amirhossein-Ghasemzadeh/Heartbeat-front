const baseURL = import.meta.env.VITE_BASE_URL + '/api';

export const URLS = {
  login: baseURL + '/Auth/login',
  signup: baseURL + '/Auth/signup',
  user: baseURL + '/User',
};
