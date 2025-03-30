import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  description: z.string().min(3, { message: "Description is required" }),
  amount: z
    .number({ invalid_type_error: "Amount is Required" })
    .min(0.01, { message: "Amount is required" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});
interface props {
  onsubmit: (data: FormData) => void;
}
type FormData = z.infer<typeof schema>;
const Form = ({ onsubmit }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onsubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          id="description"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className="form-select"
          aria-label="Default select example"
        >
          <option value="">Select Category</option>
          {categories.map((category) => {
            return (
              <option value={category} key={category}>
                {category}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default Form;
