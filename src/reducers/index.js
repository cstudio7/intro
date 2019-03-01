import { combineReducers } from 'redux';
import pageReducer from './PageReducer';

const rootReducer = combineReducers({
    page: pageReducer
});

export default rootReducer;
