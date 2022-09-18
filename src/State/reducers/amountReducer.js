const amountReducer = (state=0, action) =>{  //state is the initial value of the state, and the action is about what you want to do with the state, do you want to decrease or increase it?
    if(action.type==='deposit'){
        return action.payload + state;
    }
    else if(action.type==='withdraw'){
        return state - action.payload;
    }
    else{
        return state;
    }
}

export default amountReducer;

// There can be a lot of reducers for different purposes, for example, the parent has a lot of people around that when given information will bring the payload to the child, but reducers must be combined into one file and then it should be kept in the redux store.