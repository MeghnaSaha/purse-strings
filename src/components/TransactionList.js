import React from 'react'
import { Transaction } from './Transaction'

export const TransactionList = () => {

    const transactions = [
        {
            id: 1,
            name: "Momos",
            amount: -50
        },
        {
            id: 2,
            name: "Salary",
            amount: 5000
        },
        {
            id: 3,
            name: "Rent",
            amount: -500
        }
    ]

    return(
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map((t) => <Transaction key={t.id} transaction={t} /> )}
            </ul>
        </>
    )
}