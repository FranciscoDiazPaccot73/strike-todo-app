import { useContext, FC } from 'react';
import clsx from 'clsx';

import CardFooterAction from "./CardFooterAction";

import { BULK_DELETE_BUTTON, FILTER_ACTION_LABELS, REMAINING_LABEL } from './utils/constants';
import { PageContext } from "@store/index";
import { setModalContent } from '@store/actions';
import { isActive } from '@/utils';

export type CardFooterProps = {
  length: number
  filterApplied: string
  setFilter: (value: string) => void
}

const CardFooter: FC<CardFooterProps> = ({ length, filterApplied, setFilter }) => {
  const { dispatch, state: { isFetching, doneTasks, remainingLength } } = useContext(PageContext);
  const isActiveDisabled = isFetching || remainingLength === 0;
  const isCompleteDisabled = isFetching || !doneTasks.length;
  const bulkClasses = clsx({
    "hover:text-black dark:hover:text-white": !isCompleteDisabled,
    "cursor-not-allowed": isCompleteDisabled,
  })

  const buttonAriaProps = {
    'aria-label': 'Bulk delete button',
    'aria-disabled': isCompleteDisabled
  }

  const handleBulkDelete = async () => {
    if (!isCompleteDisabled) {
      setModalContent(dispatch, doneTasks);
    }
  }

  return (
    <div className="grid grid-cols-2 justify-between p-4 text-gray-disabled border-t border-gray-40 md:flex md:flex-row">
      <p>{`${length} ${REMAINING_LABEL}`}</p>
      <div className="mt-7 flex gap-5 order-1 md:order-none md:mt-0 md:gap-3">
        <CardFooterAction disabled={isFetching} isActive={isActive(filterApplied, 'all')} label={FILTER_ACTION_LABELS.ALL} onClick={setFilter} />
        <CardFooterAction disabled={isActiveDisabled} isActive={isActive(filterApplied,'active')} label={FILTER_ACTION_LABELS.ACTIVE} onClick={setFilter} />
        <CardFooterAction disabled={isCompleteDisabled} isActive={isActive(filterApplied,'completed')} label={FILTER_ACTION_LABELS.COMPLETED} onClick={setFilter} />
      </div>
      <button {...buttonAriaProps} disabled={isCompleteDisabled} onClick={handleBulkDelete} className={bulkClasses}>{BULK_DELETE_BUTTON}</button>
    </div>
  )
}

export default CardFooter;
