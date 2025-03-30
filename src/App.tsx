// import './App.css';
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import FilterExpenses from "./components/FilterExpenses";
import Form from "./components/Form";
interface Expensetype {
  id: number;
  category: string;
  description: string;
  amount: number;
}
function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState<Expensetype[]>([]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => {
        return expense.category === selectedCategory;
      })
    : expenses;
  return (
    <div className="App">
      <Form
        onsubmit={(data) =>
          setExpenses((prev) => {
            return [
              ...prev,
              {
                ...data,
                id: prev.length + 1,
              },
            ];
          })
        }
      />
      <FilterExpenses
        onSelectCategory={(e) => {
          setSelectedCategory(e);
        }}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(e) => {
          const newExpenses = expenses.filter((expense) => {
            return expense.id !== e;
          });
          setExpenses(newExpenses);
        }}
      />
    </div>
  );
}

export default App;
