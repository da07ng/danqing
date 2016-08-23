import { handleActions } from 'redux-actions';

import { AUTH_USER, UNAUTH_USER, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from '../constants/ActionTypes';

const initialState = {
  loggedIn: false,
  user: null,
  errorMessage: null
};

export default handleActions({
  AUTH_USER: (state, action) => {
    return {
      loggedIn: true,
      user: {
        id: 0,
        username: 'Gaudj'
      },
      errorMessage: null
    };
  },

  UNAUTH_USER: (state, action) => {
    return {
      loggedIn: false,
      user: null,
      errorMessage: null
    };
  }
}, initialState);
