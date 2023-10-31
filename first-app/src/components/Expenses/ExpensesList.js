import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  let expensesContent = <p className="expenses-list__fallback">No expenses found</p>;
    //  {/* {expensesFiltered.length === 0 ? (
    //       <p className="para">No expenses found</p>
    //     ) : (
    //       expensesFiltered.map((expense) => (
    //         <ExpenseItem
    //           key={expense.id}
    //           title={expense.title}
    //           amount={expense.amount}
    //           date={expense.date}
    //         />
    //       ))
    //     )} */}
    //     {/* //below is same as above */}
  if (props.expensesFiltered.length > 0) {
    expensesContent = props.expensesFiltered.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
