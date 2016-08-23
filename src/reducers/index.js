import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import account from './account';
import questions from './questions';

const rootReducer = combineReducers({
  account,
  questions,
  routing
});

export default rootReducer;
