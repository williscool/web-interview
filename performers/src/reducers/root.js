import { combineReducers } from 'redux';
import  performerReducer from './performers';
export default combineReducers({
    performers: performerReducer
});