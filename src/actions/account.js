import { createAction } from 'redux-actions';
import 'isomorphic-fetch';

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

const authUser = createAction(AUTH_USER);
const unauthUser = createAction(UNAUTH_USER);

export function signin() {
  localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicXFxcXEiLCJ1c2VybmFtZSI6InFxcXFxIiwiYWRtaW4iOmZhbHNlLCJfaWQiOiI1N2JlOWQ0MjUyMzQ0MzExMDA1ODliMTEiLCJpYXQiOjE0NzIxMDk4OTAsImV4cCI6MTQ3MjE5NjI5MH0.Bqem32IK4NCXLb2PfHGpNr4_XhOZcH1rZ07xnpuerAU');

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

export function signinFromToken(token) {
  return dispatch => {
    return fetch(`/api/me?token=${token}`)
      .then(response => {
        if (response.ok) {
          response.json().then(json => dispatch(authUser(json)));
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}
