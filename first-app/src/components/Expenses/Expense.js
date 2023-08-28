import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  let filterInfoText = "2019 , 2020, 2021, 2022";
  if (filteredYear === "2019") {
    filterInfoText = "2020 , 2021, 2022, 2023";
  } else if (filteredYear === "2020") {
    filterInfoText = "2019 , 2021 , 2022 , 2023";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019 , 2020 , 2022 , 2023";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019 , 2020 , 2021 , 2023";
  } else if (filteredYear === "2023") {
    filterInfoText = "2019 , 2020 , 2021 , 2022";
  }
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
        {props.expenses.map((expense) => (
          <ExpenseItem
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
