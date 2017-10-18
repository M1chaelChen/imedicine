import { createStore,combineReducers } from 'redux'
import UserReducer from '../reducers/user.js';

const reducers = combineReducers({
    user:UserReducer
});

const store = createStore(
    reducers
)

export default store;