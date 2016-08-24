import { createAction } from 'redux-actions';
import 'isomorphic-fetch';

import {
  QUESTIONS_REQUEST,
  QUESTIONS_SUCCESS,
  QUESTIONS_FAILURE
} from '../constants/ActionTypes';

export function fetchQuestions() {
  return dispatch => {
    return fetch('/api/questions')
      .then(response => response.json())
      .then(data => dispatch(questionsSuccess(data)));
  }
}

const questionsRequest = createAction(QUESTIONS_REQUEST);
const questionsSuccess = createAction(QUESTIONS_SUCCESS);
const questionsFailure = createAction(QUESTIONS_FAILURE);
