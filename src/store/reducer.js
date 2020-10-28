import { combineReducers } from 'redux-immutable';
// reducers
import { reducer as start } from './start';
import { reducer as test } from './test';

// combine reducers
export default combineReducers({
  start,
  test,
});
