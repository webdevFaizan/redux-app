import { combineReducers } from "redux";
import amountReducer from "./amountReducer";


const reducers  = combineReducers({        //An application can have more than one reducer function, this method could be used to combine the different reducers under the same name. This is the use case of reducer, we have to combine all reducers and then only we can export it.
    amount : amountReducer
});

export default reducers;
