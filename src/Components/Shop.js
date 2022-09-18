import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
// import { bindActionCreators } from 'redux';
import {actionCreators} from '../State/index';

export default function Shop() {
  const dispatch = useDispatch();
  const {depositMoney,withdrawMoney,countDeposit,countWithdraw} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
        <h1>Deposit/Withdraw Money</h1>
        <div className="container">
          {/* The following example is to show if you do not want to use bindActionCreators method then this will be done using this. */}
            {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(50))}}>-</button>
                Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(50))}}>+</button> */}
            <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(50); countWithdraw(1);}}>-</button>
                Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(50); countDeposit(1)}}>+</button>
        </div>
    </>
  )
}
