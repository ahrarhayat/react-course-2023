// import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Resident Evil 4",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "AC Mirage",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const addExpenseHandler = expense => {
  console.log('In app js')
  console.log(expense)
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expenses={expenses}/>
    </div>
  );
}

export default App;
