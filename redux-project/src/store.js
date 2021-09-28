import {createStore} from 'redux';// creating  store 

import  rootReducer from './Reducers/index';

const store = createStore(rootReducer , 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;