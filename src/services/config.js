import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API_URL, TIMEOUT_API} from 'react-native-dotenv';
import {CREATE_USER, LOGIN, REFRESH_TOKEN, UPDATE_USER_PHOTO} from './const';

const authenticatedRoute = url => {
  if (
    !url.endsWith(CREATE_USER) &&
    !url.endsWith(LOGIN) &&
    !url.endsWith(REFRESH_TOKEN)
  ) {
    return true;
  }
  return false;
};

const applicationJsonRoutes = url => {
  if (url.endsWith(UPDATE_USER_PHOTO)) {
    return false;
  }
  return true;
};

const api = axios.create({
  baseURL: API_URL,
  timeout: parseInt(TIMEOUT_API),
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token && authenticatedRoute(config.url)) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['Content-Type'] = applicationJsonRoutes(config.url)
      ? 'application/json'
      : 'multipart/form-data';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      !originalRequest.url.endsWith(REFRESH_TOKEN)
    ) {
      const refresh_token = await AsyncStorage.getItem('refresh_token');
      if (refresh_token) {
        try {
          const {token, refreshToken} = await api.post(REFRESH_TOKEN, {
            refreshToken: refresh_token,
          });
          if (token && refreshToken) {
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('refresh_token', refreshToken);
          }
          return api(originalRequest);
        } catch (err) {
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default api;
