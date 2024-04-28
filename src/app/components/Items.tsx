import React from "react";
import { queryTodos } from "../lib/actions";
import Item from "./Item";
const Items = async () => {
  const { data, errors } = await queryTodos();
  const todos = data.listTodos.items;
  return (
    <div className=" flex flex-col gap-2 w-[80%] items-center">
      {(!todos || todos.length === 0 || errors) && (
        <div>
          <p>No todos, please add one.</p>
        </div>
      )}

      {/* 4. Display todos*/}
      {todos.map((todo) => {
        return <Item todo={todo} />;
      })}
    </div>
  );
};

export default Items;
