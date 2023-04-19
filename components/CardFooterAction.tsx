import clsx from "clsx";

import { CardFooterAction } from "@pages/types";

const CardFooterAction = ({ isActive, label, onClick, disabled }: CardFooterAction) => {
  const buttonClasses = clsx({
    "text-black dark:text-white": isActive,
    "cursor-not-allowed": disabled,
    "hover:text-black dark:hover:text-white": !disabled,
  });

  const footerActionArias = {
    'aria-label': `Filter: show ${label} tasks`,
    'aria-disabled': disabled,
    'aria-current': isActive
  }

  const handleClick = () => {
    if (!disabled) onClick(label.toLowerCase())
  }

  return (
    <button {...footerActionArias} className={buttonClasses} onClick={handleClick}>
      {label}
    </button>
  )
}

export default CardFooterAction;
