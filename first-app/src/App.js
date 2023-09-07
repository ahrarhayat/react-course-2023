import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const intialDummyExpenses = [
  {
    id: "e1",
    title: "Video games",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2023, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "Guitar",
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(intialDummyExpenses);
  //the same thing is repeated here as the onAddExpense is passed on as a function to the NewExpense
  //component and can be accessed as it is passed on as a param to onAddExpense
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
