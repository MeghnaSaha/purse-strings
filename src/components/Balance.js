import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatMoney } from '../utils/DataFormatHelper';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const balance = transactions.reduce((sum, t) => (sum += t.amount), 0).toFixed(2);

  return (
    <>
      <h4>Current Balance</h4>
      <h1>{formatMoney(balance, true)}</h1>
    </>
  )
}