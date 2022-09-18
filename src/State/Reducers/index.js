import {combineReducers} from 'redux'
import amountReducers from './amountReducer';
import countReducers from './countReducer';


const reducers = combineReducers({
    amount : amountReducers,
    count : countReducers
});


export default reducers;