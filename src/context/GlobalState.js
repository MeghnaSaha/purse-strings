import React, {createContext, useReducer} from 'react'
import {AppReducer} from './AppReducer';

const initialState = {
    transactions: JSON.parse(localStorage.getItem('transactions')) || []
};

// Global Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
