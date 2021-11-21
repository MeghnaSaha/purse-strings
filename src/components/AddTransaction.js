import React, {useState} from 'react'

export const AddTransaction = () => {
    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(expenseName, amount);
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
