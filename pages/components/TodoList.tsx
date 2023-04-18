import { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = [...listFiltered];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    handleOrder(items);
  };

  return (
    <section className="my-10">
      <Card footer={CardFooter({length: remainingLength, filterApplied, setFilter: handleSetFilter})}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="listFiltered">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {listFiltered.map((todo: Todo, index: number) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TodoItem key={todo.id} item={todo} />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      </Card>
    </section>
  )
}

export default TodoList;
