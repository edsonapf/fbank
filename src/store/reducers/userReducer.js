import produce from 'immer';
import {LOGIN, LOGOUT, GET_USER} from '../consts/user';

const initialState = {
  user: {
    isLogged: false,
    data: {
      name: 'Will Smith da Silva',
      cpf: '12345678914',
      account: '1234',
      profile_photo:
        'https://res.cloudinary.com/duryni4p4/image/upload/v1589408384/fbank/_selfie_1_1589408383125.jpg',
    },
  },
  tokens: {
    token: null,
    refreshToken: null,
  },
};

export default function(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.tokens = action.payload;
        draft.user.isLogged = true;
        break;
      case LOGOUT:
        draft.user.data = {};
        draft.user.isLogged = true;
        draft.tokens.token = null;
        draft.tokens.refreshToken = null;
        break;
      case GET_USER:
        draft.user = action.payload;
        break;
      default:
        break;
    }
  });
}
