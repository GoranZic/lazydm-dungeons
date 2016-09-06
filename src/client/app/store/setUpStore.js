import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';

export default function setUpStore(){
	const store = createStore(rootReducer);
	return store;
}
