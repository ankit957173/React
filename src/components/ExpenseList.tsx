import React from "react";
import "bootstrap/dist/css/bootstrap.css";

interface expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface props {
  expenses: expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: props) => {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  if (expenses.length === 0) {
    return <h1>ExpenseList is Empty</h1>;
  }

  return (
    <>
      <table
        className="table table-striped table-hover table-bordered"
        style={{ cursor: "default" }}
      >
        <thead>
          <tr className="table-info">
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
            <th>category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.id}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td></td>
            <td>{total}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
