import {LOGIN, LOGOUT} from '../consts/user';

export function login(payload) {
  return {
    type: LOGIN,
    payload,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
