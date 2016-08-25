import { handleActions } from 'redux-actions';

import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE
} from '../constants/ActionTypes';

const initialState = {
  loggedIn: false,
  user: null,
  error: null
};

export default handleActions({
  AUTH_USER: (state, action) => {
    return { ...state, loggedIn: true, user: action.payload.user};
  },

  UNAUTH_USER: (state, action) => {
    return {
      loggedIn: false,
      user: null,
      errorMessage: null
    };
  }
}, initialState);
