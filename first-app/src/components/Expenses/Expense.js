import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  let filterInfoText = '2019, 2020, 2021, 2022'
  if(filteredYear === '2019')
    {
      filterInfoText = "2020, 2021, 2022, 2023"
    }
    else if(filteredYear === '2020') {
      filterInfoText = "2019 ,2021 ,2022 , 2023"
    }
    else if(filteredYear === '2021') {
      filterInfoText = "2019 ,2020 ,2022 , 2023"
    }
    else if(filteredYear === '2022') {
      filterInfoText = "2019 ,2020 ,2021 , 2023"
    }
    else if(filteredYear === '2023') {
      filterInfoText = "2019 ,2020 ,2021 , 2022"
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
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expense;
