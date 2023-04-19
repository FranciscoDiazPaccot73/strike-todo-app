import { useContext } from "react";
import { RoughNotation } from "react-rough-notation";

import CardRowContent from "./CardRowContent";

import { PageContext } from "@store/index";
import { updateInfo, setModalContent } from "@store/actions";

import { TodoItem } from "@pages/types";

const TodoItem = ({ item }: TodoItem) => {
  const { dispatch } = useContext(PageContext);
  const { done } = item || {};

  const handleUpdate = () => {
    const newValues = { ...item, done: !item.done };
    updateInfo(dispatch, newValues)
  }

  const handleDeteleDoc = () => {
    const modalContent = [item]
    setModalContent(dispatch, modalContent);
  }

  return (
    <CardRowContent isDone={item?.done} actionable onAction={handleUpdate}>
      <div className="flex w-calc">
        <p title={item?.label} className={`overflow-hidden text-ellipsis whitespace-nowrap ml-4 ${item?.done ? 'text-gray-disabled' : 'text-black dark:text-white'}`}>
          <RoughNotation type="strike-through" color='#767783' show={done}>
            {item?.label}
          </RoughNotation>
        </p>
        <button onClick={handleDeteleDoc} className="text-gray-disabled ml-auto pl-3 hover:text-black dark:hover:text-white">Delete</button>
      </div>
    </CardRowContent>
  )
}

export default TodoItem;
