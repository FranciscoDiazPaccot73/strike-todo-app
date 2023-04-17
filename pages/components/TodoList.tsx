import { useState } from "react";
import { Reorder } from "framer-motion";

import Card from "./Card";
import CardFooter from "./CardFooter";
import TodoItem from "./TodoItem";

import { Todo, TodoList } from "../types";

const TodoList = ({ list }: TodoList) => {
  const [listFiltered, filterList] = useState<Array<Todo>>(list);
  const [filterApplied, setFilter] = useState<string>('all');

  return (
    <section className="my-10">
      <Card footer={CardFooter({length: list.length, filterApplied, setFilter})}>
        <ul>
          <Reorder.Group axis="y" onReorder={filterList} values={listFiltered}>
            {listFiltered.map((todo: Todo) => <TodoItem key={todo.id} item={todo} />)}
          </Reorder.Group>
        </ul>
      </Card>
    </section>
  )
}

export default TodoList;
