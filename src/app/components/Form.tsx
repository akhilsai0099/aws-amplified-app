"use client";
import { createTodo } from "../lib/actions";
import { useRef } from "react";

const Form = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await createTodo(formData);
        ref.current?.reset();
      }}
      className="flex w-[80%] items-center justify-between gap-3"
    >
      <input
        name="name"
        placeholder="Add a todo"
        className="h-10 p-2 bg-transparent border-b-2 w-[100%] focus:outline-none"
      />
      <button type="submit" className="bg-green-500 px-6 py-2 rounded">
        Add
      </button>
    </form>
  );
};

export default Form;
