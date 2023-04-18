import { useContext } from 'react';
import CardFooterAction from "./CardFooterAction";

import { CardFooter } from "../types";
import { PageContext } from "@/store";
import { setModalContent } from '@/store/actions';

const CardFooter = ({ length, filterApplied, setFilter }: CardFooter) => {
  const { dispatch, state: { isFetching, doneTasks, remainingLength } } = useContext(PageContext);
  const isActiveDisabled = isFetching || remainingLength === 0;
  const isCompleteDisabled = isFetching || !doneTasks.length;
  const bulkClasses = !isCompleteDisabled ? "hover:text-black dark:hover:text-white" : 'cursor-not-allowed';

  const handleBulkDelete = async () => {
    if (!isCompleteDisabled) {
      setModalContent(dispatch, doneTasks);
    }
  }

  return (
    <div className="grid grid-cols-2 justify-between p-4 text-gray-disabled border-t border-gray-40 md:flex md:flex-row">
      <p>{length} remaining</p>
      <div className="mt-7 flex gap-5 order-1 md:order-none md:mt-0 md:gap-3">
        <CardFooterAction disabled={isFetching} isActive={filterApplied === 'all'} label="All" onClick={setFilter} />
        <CardFooterAction disabled={isActiveDisabled} isActive={filterApplied === 'active'} label="Active" onClick={setFilter} />
        <CardFooterAction disabled={isCompleteDisabled} isActive={filterApplied === 'completed'} label="Completed" onClick={setFilter} />
      </div>
      <button onClick={handleBulkDelete} className={bulkClasses}>Clear completed</button>
    </div>
  )
}

export default CardFooter;
