const countReducer = (state=0, action) =>{  //state is the initial value of the state, and the action is about what you want to do with the state, do you want to decrease or increase it?
    if(action.type==='add'){
        return action.payload + state;
    }
    else if(action.type==='substract'){
        return state - action.payload;
    }
    else{
        return state;
    }
}

export default countReducer;