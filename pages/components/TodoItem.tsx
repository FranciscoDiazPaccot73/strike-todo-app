import { useContext } from "react";
import { Reorder, useMotionValue  } from 'framer-motion';
import { RoughNotation } from "react-rough-notation";

import CardRowContent from "./CardRowContent";

import { PageContext } from "@/store";
import { updateInfo } from "@/store/actions";

import { TodoItem } from "../types";

const TodoItem = ({ item }: TodoItem) => {
  const { dispatch } = useContext(PageContext);
  const y = useMotionValue(0);
  const { done } = item || {};

  const handleUpdate = () => {
    const newValues = { ...item, done: !item.done };
    updateInfo(dispatch, newValues)
  }

  return (
    <Reorder.Item
      value={item}
      id={item?.id.toString()}
      style={{ y }}
      className="border-b border-gray-40 cursor-grab bg-light-card dark:bg-dark-card"
    >
      <CardRowContent isDone={item?.done} actionable onAction={handleUpdate}>
      <p className={`ml-4 ${item?.done ? 'text-gray-disabled' : 'text-black dark:text-white'}`}>
        <RoughNotation type="strike-through" color='#767783' show={done}>
          {item?.label}
        </RoughNotation>
      </p>
      </CardRowContent>
    </Reorder.Item>
  )
}

export default TodoItem;
