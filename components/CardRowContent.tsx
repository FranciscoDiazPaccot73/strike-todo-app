import clsx from "clsx";

import Checkbox from "./Checkbox";

import { CardRowContent } from "@pages/types";

const CardRowContent = ({ checkboxName, done, children, actionable, onAction = () => {} }: CardRowContent) => {
  const actionableClasses = clsx("relative rounded-full overflow-hidden w-6 h-6 border border-white z-10 md:h-7 md:w-7", {
    "cursor-pointer bg-gradient-to-r from-blue to-purple after:content-complete md:hover:bg-none md:hover:after:content-none": actionable && done,
    "cursor-pointer md:hover:animate-gradient md:hover:bg-gradient-to-r md:hover:from-blue md:hover:to-purple bg-400": actionable && !done,
  })
  const contentClasses = clsx("cursor-pointer appearance-none opacity-0 w-full h-full absolute top-0 left-0 md:hover:opacity-100 md:transition-all md:duration-500", {
    "md:hover:content-remove": actionable && done,
    "md:hover:content-complete": actionable && !done
  })

  return (
    <div className="w-full h-full p-4 flex items-center gap-3 relative bg-light-card dark:bg-dark-card md:gap-4">
      <div className={actionableClasses}>
        <Checkbox name={checkboxName} onAction={onAction} className={contentClasses} checked={done} />
      </div>
      {children}
    </div>
  )
}

export default CardRowContent;
