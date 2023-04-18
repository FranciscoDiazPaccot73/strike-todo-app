import { useContext } from "react";
import { Reorder, useMotionValue  } from 'framer-motion';
import { RoughNotation } from "react-rough-notation";

import CardRowContent from "./CardRowContent";

import { PageContext } from "@/store";
import { updateInfo, deleteDoc } from "@/store/actions";

import { TodoItem } from "../types";

const TodoItem = ({ item }: TodoItem) => {
  const { dispatch } = useContext(PageContext);
  const y = useMotionValue(0);
  const { done } = item || {};

  const handleUpdate = () => {
    const newValues = { ...item, done: !item.done };
    updateInfo(dispatch, newValues)
  }

  const handleDeteleDoc = () => {
    deleteDoc(dispatch, item.id);
  }

  return (
    <Reorder.Item
      value={item}
      id={item?.id.toString()}
      style={{ y }}
      className="border-b border-gray-40 cursor-grab bg-light-card dark:bg-dark-card"
    >
      <CardRowContent isDone={item?.done} actionable onAction={handleUpdate}>
        <div className="flex w-calc bg-light-card dark:bg-dark-card">
          <p title={item?.label} className={`overflow-hidden text-ellipsis whitespace-nowrap ml-4 ${item?.done ? 'text-gray-disabled' : 'text-black dark:text-white'}`}>
            <RoughNotation type="strike-through" color='#767783' show={done}>
              {item?.label}
            </RoughNotation>
          </p>
          <button onClick={handleDeteleDoc} className="text-gray-disabled ml-auto pl-3 hover:text-black dark:hover:text-white">Delete</button>
        </div>
      </CardRowContent>
    </Reorder.Item>
  )
}

export default TodoItem;
