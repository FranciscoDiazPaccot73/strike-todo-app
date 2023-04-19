import { useContext, useEffect } from "react";

import Card from "./Card";
import CardFooter from "./CardFooter";
import TodoContent from "./TodoContent";

import { PageContext } from "@store/index";
import { setFilter, setInitialValues } from "@store/actions";
import { getListFiltered } from "@utils/index";

import { TodoList } from "@pages/types";

const TodoList = ({ list: initialList }: TodoList) => {
  const { dispatch, state: { listFiltered, filterApplied, remainingLength, list } } = useContext(PageContext);
  const listToRender = listFiltered.length ? listFiltered : initialList;

  useEffect(() => {
    setInitialValues(dispatch, initialList)
  }, [])

  const handleSetFilter = (value: string) => {
    const newList = getListFiltered(list, value);
    setFilter(dispatch, value, newList)
  }

  return (
    <section className="my-10">
      <Card>
        <>
          <TodoContent list={listToRender} />
          <CardFooter length={remainingLength} filterApplied={filterApplied} setFilter={handleSetFilter} />
        </>
      </Card>
    </section>
  )
}

export default TodoList;
