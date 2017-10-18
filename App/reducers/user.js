import * as ActionTypes from '../components/actions/types';

const initialState = {
    user:null
}

export default UserReducer = (state=initialState,action)=>{
	switch (action.type) {
		case ActionTypes.LOGIN:
			return {
				...state,
				user: action.user
			}
            
        default:
            return state
	}
}