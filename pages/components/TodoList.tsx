import { useContext } from "react";
import { Reorder } from 'framer-motion';

import Card from "./Card";
import CardFooter from "./CardFooter";
import TodoItem from "./TodoItem";

import { Todo, FilterValue } from "../types";
import { PageContext } from "@/store";
import { setFilter, setFilteredItems } from "@/store/actions";
import { getListFiltered } from "@/utils";

const TodoList = () => {
  const { dispatch, state: { listFiltered = [], filterApplied, remainingLength, list } } = useContext(PageContext);

  const handleSetFilter = (value: FilterValue) => {
    const newList = getListFiltered(list, value);
    setFilter(dispatch, value, newList)
  }

  const handleOrder = (values: Todo[]) => {
    setFilteredItems(dispatch, values)
  }

  return (
    <section className="my-10">
      <Card footer={CardFooter({length: remainingLength, filterApplied, setFilter: handleSetFilter})}>
        <Reorder.Group axis="y" onReorder={handleOrder} values={listFiltered}>
          {listFiltered?.map((todo: Todo) => <TodoItem key={todo.id} item={todo} />)}
        </Reorder.Group>
      </Card>
    </section>
  )
}

export default TodoList;
