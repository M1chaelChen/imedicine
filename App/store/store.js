import { createStore,combineReducers } from 'redux'
import UserReducer from '../reducers/user.js';
import MedicineReducer from '../reducers/medicine.js';

const reducers = combineReducers({
    user:UserReducer,
    medicine: MedicineReducer
});

const store = createStore(
    reducers
)

export default store;