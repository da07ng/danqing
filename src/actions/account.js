import { createAction } from 'redux-actions';

import { AUTH_USER, UNAUTH_USER, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_OUT_SUCCESS, SIGN_OUT_FAILURE } from '../constants/ActionTypes';

// export const signin = createAction(SIGN_IN);
// export const signout = createAction(SIGN_OUT);

export function signin() {
  localStorage.setItem('user', JSON.stringify({username: 'gaudj'}));

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
