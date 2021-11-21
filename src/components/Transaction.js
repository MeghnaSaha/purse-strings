import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatMoney } from "../utils/DataFormatHelper";

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.name} <span>{formatMoney(transaction.amount, false)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    )
}