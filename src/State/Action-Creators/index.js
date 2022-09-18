export const depositMoney =(amount)=>{
    return (dispatch) =>{
        dispatch({
            type : 'deposit',
            amount : amount
        })
    }
}


export const withdrawMoney =(amount)=>{
    return (dispatch) =>{
        dispatch({
            type : 'withdraw',
            amount : amount
        })
    }
}


export const depositCount =(count)=>{
    return (dispatch) =>{
        dispatch({
            type : 'increaseCount',
            amount : count
        })
    }
}


export const withdrawCount =(count)=>{
    return (dispatch) =>{
        dispatch({
            type : 'decreaseCount',
            amount : count
        })
    }
}