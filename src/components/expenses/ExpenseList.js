import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
    </div>
  );
};

export default ExpenseList;
