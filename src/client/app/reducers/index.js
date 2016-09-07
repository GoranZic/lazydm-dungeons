import { combineReducers } from 'redux';
import tileSets from "../data/tileSets";

//tile reducer
function tiles(state= tileSets
    , action){
	return state;
}

const rootReducer = combineReducers({tiles})

export default rootReducer;