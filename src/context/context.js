import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 25,
    category: "Phone",
    type: "Expense",
    date: "2022-05-06",
    id: "c56d610f-ddc3-4daf-a84b-9b5d9bbcf783",
  },
];

export const ExpenseTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
      };

      const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
      };
    
      const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction,
            addTransaction,
            transactions,
            balance
          }}
          >
            {children}
          </ExpenseTrackerContext.Provider>
    )
}