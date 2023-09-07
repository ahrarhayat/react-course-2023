import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpense.css"
const NewExpense = (props) => {
    //enteredExpenseData acts like an event here and gets the expenseData from ExpenseForm.js(child)
    //the data is passed on the onSaveExpenseData funtion as param
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('item being added on NewExpense.js and sent back to App.js',expenseData)
        props.onAddExpense(expenseData)
    };
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;