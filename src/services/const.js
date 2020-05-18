const USERS = '/users';
const ACCOUNTS = '/accounts';
const TRANSACTIONS = '/transactions';

// Users endpoints
const CREATE_USER = USERS + '/create-user';
const LOGIN = USERS + '/login';
const REFRESH_TOKEN = USERS + '/refresh-token';
const LOGOUT = USERS + '/logout';
const UPDATE_USER = USERS + '/update-user';
const UPDATE_USER_PHOTO = USERS + '/update-user-photo';
const DELETE_USER = USERS + '/delete-user';

// Accounts endpoints
const CREATE_ACCOUNT = ACCOUNTS + '/create-account';
const MAIN_ACCOUNT = ACCOUNTS + '/main-account';
const DELETE_ACCOUNT = ACCOUNTS + '/delete-account';

// Transactions endpoints
const FAVORITES_ACCOUNTS_TRANSFER =
  TRANSACTIONS + '/favorites-accounts-transfer';
const FAVORITES_NAMES_TRANSFER = TRANSACTIONS + '/favorites-names-transfer';
const TRANSACTIONS_PER_DATE = TRANSACTIONS + '/transactions-per-date';
const DEPOSIT = TRANSACTIONS + '/deposit';
const WITHDRAW = TRANSACTIONS + '/withdraw';
const TRANSFER = TRANSACTIONS + '/transfer';

export {
  CREATE_USER,
  LOGIN,
  REFRESH_TOKEN,
  LOGOUT,
  UPDATE_USER,
  UPDATE_USER_PHOTO,
  DELETE_USER,
  CREATE_ACCOUNT,
  MAIN_ACCOUNT,
  DELETE_ACCOUNT,
  FAVORITES_ACCOUNTS_TRANSFER,
  FAVORITES_NAMES_TRANSFER,
  TRANSACTIONS_PER_DATE,
  DEPOSIT,
  WITHDRAW,
  TRANSFER,
};
