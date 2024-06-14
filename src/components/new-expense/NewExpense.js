import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onSave }) => {
  const [toggle, setToggle] = useState(false);

  const startInsertModeHandler = () => setToggle(true);
  const stopInsertModeHandler = () => setToggle(false);

  const newExpenseContent = (
    <ExpenseForm onAdd={onSave} onCancel={stopInsertModeHandler} />
  );

  const noContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  return (
    <div className="new-expense">{toggle ? newExpenseContent : noContent}</div>
  );
};

export default NewExpense;
