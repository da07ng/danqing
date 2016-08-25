import { createAction } from 'redux-actions';
import 'isomorphic-fetch';

import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from '../constants/ActionTypes';

const fetchQuestionsRequest = createAction(FETCH_QUESTIONS_REQUEST);
const fetchQuestionsSuccess = createAction(FETCH_QUESTIONS_SUCCESS);
const fetchQuestionsFailure = createAction(FETCH_QUESTIONS_FAILURE);

export function fetchQuestions() {
  return dispatch => {
    dispatch(fetchQuestionsRequest);

    return fetch('/api/questions')
      .then(response => {
        if (response.ok) {
          response.json().then(json => dispatch(fetchQuestionsSuccess(json)));
        }
      })
      .catch(error => {
        dispatch(fetchQuestionsFailure(error.message);
      });
  }
}
