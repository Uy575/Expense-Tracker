import React, { useContext } from 'react'
import { GlobalTransaction } from '../context/TransactionsState'

function TransactionLi({transaction}) {
 const {DeleteTransaction} = useContext(GlobalTransaction);
  return (
          <li className={transaction.amount < 0? 'minus' : 'plus'}>
            {transaction.text} <span>{Math.abs(transaction.amount)}</span>
            <button onClick={()=> DeleteTransaction(transaction.id)} className="delete-btn">x</button>
             </li> 
  )
}

export default TransactionLi