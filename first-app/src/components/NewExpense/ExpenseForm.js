import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  // const[userInput, setUserInput]=useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle)
    //setUserInput({...userInput,enteredTitle: event.target.value})
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({...userInput,enteredAmount: event.target.value})
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({...userInput,enteredDate: event.target.value})
  };

  const expenseFormHandler = () => {
    setIsEditing(!isEditing);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //Execute the onSaveExpenseData prop as a function with the expense data as param
    //And then it will trigger the saveExpenseDataHandler function in NewEnpense.js(Parent component)
    //And we get the data from child to parent
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsEditing(!isEditing);
  };

  let expenseForm = isEditing ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="reset" onClick={expenseFormHandler}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>
      <button
        className="new-expense-button-center"
        type="submit"
        onClick={expenseFormHandler}
      >
        Add Expense
      </button>
    </div>
  );

  return expenseForm;
};

export default ExpenseForm;
