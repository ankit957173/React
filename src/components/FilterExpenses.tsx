import React from "react";
import categories from "../categories";
interface props {
  onSelectCategory: (category: string) => void;
}

const FilterExpenses = ({ onSelectCategory }: props) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(e) => {
        //   const value = (e.target as HTMLSelectElement).value;
        onSelectCategory(e.target.value);
      }}
    >
      <option value="">All Categories</option>
      {categories.map((category) => {
        return <option key={category}>{category}</option>;
      })}{" "}
    </select>
  );
};

export default FilterExpenses;
