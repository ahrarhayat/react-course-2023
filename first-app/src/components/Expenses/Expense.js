import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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
    console.log("expensesFiltered", expensesFiltered);
    console.log("Expense.js");
    console.log(enteredYear);
    setFilteredYear(enteredYear);
    console.log("current year", filteredYear);
  };

  return (
    <div>
      <li>
        <Card className="expenses">
          <ExpensesFilter
            defaultYear={filteredYear}
            onChangeYear={changeYearHandler}
          />
          <ExpensesChart expenses={expensesFiltered} />
          <p className="para">Data for years {filterInfoText} is hidden</p>
          <ExpensesList expensesFiltered={expensesFiltered} />
        </Card>
      </li>
    </div>
  );
}

export default Expense;
