import { CardFooterAction } from "@pages/types";

const CardFooterAction = ({ isActive, label, onClick, disabled }: CardFooterAction) => {
  const appliedClasses = "text-black dark:text-white";
  const statusClasses = !disabled ? 'hover:text-black dark:hover:text-white' : 'cursor-not-allowed';

  const handleClick = () => {
    if (!disabled) onClick(label.toLowerCase())
  }

  return (
    <button
      className={`${statusClasses} ${isActive ? appliedClasses : ''}`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default CardFooterAction;
