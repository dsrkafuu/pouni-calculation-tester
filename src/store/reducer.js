import { combineReducers } from 'redux';
/* reducers */
import { reducer as start } from '../views/Start/store';

// combine reducers
export default combineReducers({
  start,
});
