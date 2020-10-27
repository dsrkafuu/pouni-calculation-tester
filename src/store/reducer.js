import { combineReducers } from 'redux-immutable';
// reducers
import { reducer as start } from '../views/Start/store';
import { reducer as test } from '../views/Test/store';

// combine reducers
export default combineReducers({
  start,
  test,
});
