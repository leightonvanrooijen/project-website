import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

// Creats the store for Redux golbal states
const store = createStore(rootReducer, composeWithDevTools()) ;

export default store;