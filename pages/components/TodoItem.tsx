import { Reorder, useMotionValue } from "framer-motion";

import CardRowContent from "./CardRowContent";

import { TodoItem } from "../types";

const TodoItem = ({ item }: TodoItem) => {
  const y = useMotionValue(0);

  return (
    <Reorder.Item
      value={item}
      id={item.id.toString()}
      style={{ y }}
      className="border-b border-gray-40 cursor-grab bg-light-card dark:bg-dark-card"
    >
      <CardRowContent isDone={item.done}>
        <p className="pl-4 text-black dark:text-white">{item.label}</p>
      </CardRowContent>
    </Reorder.Item>
  )
}

export default TodoItem;
