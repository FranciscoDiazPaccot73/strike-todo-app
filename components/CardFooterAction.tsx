import { FC } from "react";
import clsx from "clsx";

import { CardFooterProps } from "./CardFooter";

type CardFooterActionProps = {
  isActive: boolean
  label: string
  onClick: CardFooterProps['setFilter']
  disabled?: boolean
}

const CardFooterAction: FC<CardFooterActionProps> = ({ isActive, label, onClick, disabled }) => {
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
    <button {...footerActionArias} className={buttonClasses} disabled={disabled} onClick={handleClick}>
      {label}
    </button>
  )
}

export default CardFooterAction;
