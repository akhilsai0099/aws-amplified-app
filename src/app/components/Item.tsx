"use client";
import { revalidatePath } from "next/cache";
import { deleteTodo, updateTodo } from "../lib/actions";
type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null | undefined;
  createdAt: string;
  updatedAt: string;
};

const Item: React.FC<{ todo: Todo }> = ({ todo }) => {
  const delTodo = async () => {
    const id = todo.id;
    await deleteTodo(id);
  };

  const updatetodo = async (e: React.FocusEvent<HTMLInputElement>) => {
    const id = todo.id;
    console.log(e.target.innerText);
    await updateTodo(id, e.target.innerText);
  };

  return (
    <div className="flex border-b-2 px-4 py-2 w-[100%] justify-between items-center">
      <div
        key={todo.id}
        contentEditable="true"
        className="w-[100%] focus: outline-none p-4 cursor-pointer"
        onBlur={updatetodo}
      >
        {todo.name}
      </div>
      <button onClick={delTodo} className="bg-red-500 p-2 rounded-md">
        Delete
      </button>
    </div>
  );
};
export default Item;
