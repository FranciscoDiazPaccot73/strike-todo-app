import { useContext } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

import { Todo, TodoList } from "@pages/types";
import { PageContext } from "@store/index";
import { setFilteredItems } from "@store/actions";

const TodoContent = ({ list: listFiltered }: TodoList) => {
  const { dispatch } = useContext(PageContext);

  const handleOrder = (values: Todo[]) => {
    setFilteredItems(dispatch, values)
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = [...listFiltered];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    handleOrder(items);
  };

  return (
    <>
      {listFiltered.length ? (
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
      ) : <EmptyState />}
    </>
  )
}

export default TodoContent;
