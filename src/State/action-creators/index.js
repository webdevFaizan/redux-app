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

export const countDeposit = (num) =>{
    return (dispatch)=>{
        dispatch({
            type : 'add',           //This type has to be different for each different vaiables, this method is targetting the count variables, whichiis different from the total money variables in the depositMoney and withdrawMoney function.
            payload : num
        })
    }
}

export const countWithdraw = (num) =>{
    return (dispatch)=>{
        dispatch({
            type : 'substract',
            payload : num
        })
    }
}