import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

function errorMessage(state = null, action) {
	return state;
}

const rootReducer = combineReducers({
	errorMessage,
	routing: routerReducer,
});

export default rootReducer;