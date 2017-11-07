import * as ActionTypes from '../components/actions/types';


export default MedicineReducer = (state=[],action)=>{
	switch (action.type) {
		case ActionTypes.ADD_MEDICINE:
			return  [...state, action.medicine ]
            
        default:
            return state
	}
}