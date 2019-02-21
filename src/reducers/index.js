// ----
// Dependencies
import { combineReducers } from 'redux';
import resultsReducer from './resultsReducer';
import modifyReducer from './modifyReducer';


export default combineReducers({
    results: resultsReducer,
    inputValue: modifyReducer
});
