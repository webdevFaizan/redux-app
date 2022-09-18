export const depositMoney= (amount) =>{     //These functions will take the state amount and will increase or decrease the amount of money.
    return (dispatch)=>{            //This is the reducer method that will has the information of what has to be changed in the state of totalmoney.
        dispatch({
            type : 'deposit',
            payload : amount
        })
    }
}

export const withdrawMoney= (amount) =>{
    return (dispatch)=>{            //This is the reducer method that will has the information of what has to be changed in the state of totalmoney.
        dispatch({
            type : 'withdraw',
            payload : amount
        })
    }
}