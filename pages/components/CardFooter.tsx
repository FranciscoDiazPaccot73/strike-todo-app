import CardFooterAction from "./CardFooterAction";

import { CardFooter } from "../types";

const CardFooter = ({ length, filterApplied, setFilter }: CardFooter) => {
  return (
    <div className="grid grid-cols-2 justify-between p-4 text-gray-disabled md:flex md:flex-row">
      <p>{length} remaining</p>
      <div className="mt-7 flex gap-5 order-1 md:order-none md:mt-0 md:gap-3">
        <CardFooterAction isActive={filterApplied === 'all'} label="All" onClick={setFilter} />
        <CardFooterAction isActive={filterApplied === 'active'} label="Active" onClick={setFilter} />
        <CardFooterAction isActive={filterApplied === 'completed'} label="Completed" onClick={setFilter} />
      </div>
      <button className="hover:text-black dark:hover:text-white">Clear completed</button>
    </div>
  )
}

export default CardFooter;
