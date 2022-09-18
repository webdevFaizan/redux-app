//This file is the redux store, here we will
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";        //redux-thunk help us in executing the asynchronous elements.
import reducers from "./reducers";
import { createStore } from "redux";
// import {configureStore} from '@reduxjs/toolkit'


// const store = configureStore(reducers,{},applyMiddleware(thunk));
const store = createStore(reducers,{},applyMiddleware(thunk));

export default store;