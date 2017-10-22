import { combineReducers } from 'redux';
import  FetchReducer from './reducer_fetch'
const rootReducer = combineReducers({
  weather:FetchReducer
});

export default rootReducer;
