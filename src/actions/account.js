import { createAction } from 'redux-actions';

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

// export const signin = createAction(SIGN_IN);
// export const signout = createAction(SIGN_OUT);

export function signin() {
  localStorage.setItem('user', JSON.stringify({
    username: 'danqing'
  }));

  return {
    type: AUTH_USER
  }
}

export function signup() {
  return {
    type: AUTH_USER
  }
}

export function signout() {
  return {
    type: UNAUTH_USER
  }
}
