import { CardFooterAction } from "../types";

const CardFooterAction = ({ isActive, label, onClick }: CardFooterAction) => {
  const appliedClasses = "text-black dark:text-white";

  return (
    <button
      className={`hover:text-black dark:hover:text-white ${isActive ? appliedClasses : ''}`}
      onClick={() => onClick(label.toLowerCase())}
    >
      {label}
    </button>
  )
}

export default CardFooterAction;
