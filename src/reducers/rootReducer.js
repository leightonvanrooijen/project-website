import {combineReducers} from 'redux';
import headerWordsReducer from './headerWordsReducer';

const rootReducer = combineReducers({
    headerWords: headerWords
})

export default rootReducer;