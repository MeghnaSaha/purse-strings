import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const expense = transactions.filter(t => t.amount < 0).reduce((sum, t) => (sum += t.amount), 0).toFixed(2);
    const income = transactions.filter(t => t.amount >= 0).reduce((sum, t) => (sum += t.amount), 0).toFixed(2);

    return(
        <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">INR {Math.abs(income)}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">INR {Math.abs(expense)}</p>
        </div>
      </div>
    )
}