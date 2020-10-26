import { createStore } from 'redux';
// preloaded state
import reducer from './reducer';
// apply devtools
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// create store
const store = createStore(reducer, enhancer);

export default store;
