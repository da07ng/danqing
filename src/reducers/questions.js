import { handleActions } from 'redux-actions';

import {
  FETCH_QUESTIONS_REQUEST,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS_FAILURE
} from '../constants/ActionTypes';

const initialState = [{
  loading: false,
  items: [],
  error: null
}];

export default handleActions({
  FETCH_QUESTIONS_REQUEST: (state, action) => {
    return { ...state, loading: true, items: []};
  },

  FETCH_QUESTIONS_SUCCESS: (state, action) => {
    return { ...state, loading: false, items: action.payload.data};
  },

  FETCH_QUESTIONS_FAILURE: (state, action) => {
    return { ...state, loading: false, items: [], error: error};
  }
}, initialState);
