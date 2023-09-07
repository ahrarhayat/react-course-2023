import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const expensesFiltered = props.expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear().toString();
    return expenseYear === filteredYear;
  });
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const filterInfoText = years
    .filter((year) => year !== filteredYear)
    .join(" , ");
  const changeYearHandler = (enteredYear) => {
    console.log("Expense.js");
    console.log(enteredYear);
    setFilteredYear(enteredYear);
    console.log("current year", filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onChangeYear={changeYearHandler}
        />
        <p className="para">Data for years {filterInfoText} is hidden</p>
        {expensesFiltered.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expense;
