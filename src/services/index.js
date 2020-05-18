import api from './config';
import {
  CREATE_USER,
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  UPDATE_USER_PHOTO,
  CREATE_ACCOUNT,
  MAIN_ACCOUNT,
  DELETE_ACCOUNT,
  FAVORITES_ACCOUNTS_TRANSFER,
  FAVORITES_NAMES_TRANSFER,
  TRANSACTIONS_PER_DATE,
  DEPOSIT,
  WITHDRAW,
  TRANSFER,
} from './const';

export default class FbankApi {
  // Users requests
  static async createUser(user) {
    try {
      const response = await api.post(CREATE_USER, user);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async login(userData) {
    try {
      const response = await api.post(LOGIN, userData);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async logout(refreshToken) {
    try {
      const response = await api.post(LOGOUT, {
        refreshToken,
      });
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async updateUser(user) {
    try {
      const response = await api.put(UPDATE_USER, user);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async updateUserPhoto(userPhoto) {
    try {
      const response = await api.put(UPDATE_USER_PHOTO, userPhoto);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
  // Accounts requests
  // Transactions requests
}
