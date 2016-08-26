import { createAction } from 'redux-actions';
import 'isomorphic-fetch';

import {
  AUTH_USER,
  UNAUTH_USER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE
} from '../constants/ActionTypes';

const authUser = createAction(AUTH_USER);
const unauthUser = createAction(UNAUTH_USER);

export function register(username, email, password) {
  var userForm = new FormData();
  userForm.append("username", username);
  userForm.append("email", email);
  userForm.append("password", password);

  return dispatch => {
    fetch('/account/register', {
      method: 'POST',
      body: userForm
    })
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

export function signin(account, password) {
  var userForm = new FormData();
  userForm.append("account", account);
  userForm.append("password", password);

  return dispatch => {
    fetch('/account/signin', {
      method: 'POST',
      body: userForm
    })
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoicXFxcXEiLCJ1c2VybmFtZSI6InFxcXFxIiwiYWRtaW4iOmZhbHNlLCJfaWQiOiI1N2JlOWQ0MjUyMzQ0MzExMDA1ODliMTEiLCJpYXQiOjE0NzIxMDk4OTAsImV4cCI6MTQ3MjE5NjI5MH0.Bqem32IK4NCXLb2PfHGpNr4_XhOZcH1rZ07xnpuerAU');
          dispatch(authUser(json));
        });
      }
    })
    .catch(error => {
      console.log(error.message);
    });
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
