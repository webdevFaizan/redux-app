//This file is the redux store, here we will
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";        //redux-thunk help us in executing the asynchronous elements.
import reducers from "./reducers";
import { createStore } from "redux";    //This createStore method is deprecated because it uses a more complicated version of creating store using Vanill JS type algorithm. For now I will use it, but for next videos we will use configureStore. Its syntax is going to be different.
// import {configureStore} from '@reduxjs/toolkit'

// const store = configureStore(reducers,{},applyMiddleware(thunk));

const store = createStore(reducers, {}, applyMiddleware(thunk));  //reducers is the combined bundle of all the reducers in one place, {} is the initial state of objects, applyMiddleware (thunk) is going to handle the asynchronous part, consider this as boiler plate syntax. Just use it.

export default store;