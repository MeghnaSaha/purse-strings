import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: uuidv4(),
            name: expenseName,
            amount: parseInt(amount)
        });
        setExpenseName('');
        setAmount(0);
    }

    return(
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Expense Name</label>
                    <input type="text" value={expenseName} onChange={(e)=>setExpenseName(e.target.value)} placeholder="Enter expense name..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Expense Amount <br/> <div className="help-text">Negative - Expense | Positive - Income</div></label>
                    <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter expense amount..."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
