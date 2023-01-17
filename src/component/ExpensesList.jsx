import React from 'react'
import { useContext } from 'react'
import { GlobalTransaction } from '../context/TransactionsState';
import TransactionLi from './TransactionLi';
function ExpensesList() {
    const {transactions} = useContext(GlobalTransaction);
  return (
    <>
    <h3>History</h3>
    <ul id="list" className="list">
        {transactions.map(transaction =>( <TransactionLi key={transaction.id} transaction={transaction}/>
    ))}
       
     
    </ul>
    </>
  )
}

export default ExpensesList