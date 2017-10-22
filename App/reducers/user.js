import * as ActionTypes from '../components/actions/types';

export default UserReducer = (state='',action)=>{
	switch (action.type) {
		case ActionTypes.LOGIN:
			return  action.user
            
        default:
            return state
	}
}