import { useContext } from "react";
import { RoughNotation } from "react-rough-notation";
import clsx from "clsx";

import CardRowContent from "./CardRowContent";

import { PageContext } from "@store/index";
import { updateInfo, setModalContent } from "@store/actions";
import { ITEM } from "./utils/constants";
import { TodoItem } from "@pages/types";

const TodoItem = ({ item }: TodoItem) => {
  const { dispatch } = useContext(PageContext);
  const itemLabelClasses = clsx("overflow-hidden text-ellipsis whitespace-nowrap ml-4", {
    "text-gray-disabled": item?.done,
    "text-black dark:text-white": !item?.done,
  })
  const taskStatus = item?.done ? 'done' : 'ongoing';

  const handleUpdate = () => {
    const newValues = { ...item, done: !item.done };
    updateInfo(dispatch, newValues)
  }

  const handleDeteleDoc = () => {
    const modalContent = [item]
    setModalContent(dispatch, modalContent);
  }

  return (
    <CardRowContent checkboxName={`Mark ${item?.label} as ${taskStatus}`} done={item?.done} actionable onAction={handleUpdate}>
      <div className="flex w-calc">
        <p title={item?.label} className={itemLabelClasses}>
          <RoughNotation type="strike-through" color={ITEM.ROUGH_COLOR} show={item?.done}>
            {item?.label}
          </RoughNotation>
        </p>
        <button aria-label={`Remove ${item?.label}`} onClick={handleDeteleDoc} className="text-gray-disabled ml-auto pl-3 hover:text-black dark:hover:text-white">
          {ITEM.ACTION_LABEL}
        </button>
      </div>
    </CardRowContent>
  )
}

export default TodoItem;
