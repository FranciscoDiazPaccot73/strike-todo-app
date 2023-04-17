import { CardRowContent } from "../types";

const CardRowContent = ({ isDone, children, actionable, onAction }: CardRowContent) => {
  const ongoingClasses = 'cursor-pointer md:hover:animate-gradient md:hover:bg-gradient-to-r md:hover:from-blue md:hover:to-purple bg-400';
  const doneClasses = 'cursor-pointer bg-gradient-to-r from-blue to-purple after:content-complete md:hover:bg-none md:hover:after:content-none';
  const content = isDone ? 'md:hover:after:content-remove' : 'md:hover:after:content-complete';
  const actionableClasses = isDone ? doneClasses : ongoingClasses;

  const handleAction = () => {
    onAction && onAction()
  }

  return (
    <div className="w-full h-full p-4 flex items-center gap-3 relative md:gap-4">
      <div onClick={handleAction} className={`relative rounded-full w-6 h-6 border border-white z-10 md:h-7 md:w-7 ${actionable ? actionableClasses : ''}`}>
        <div className={`opacity-0 w-full h-full absolute top-0 left-0 md:after:inline-block md:after:w-full md:hover:opacity-100 md:transition-all md:duration-500 ${actionable ? content : ''}`} />
      </div>
      {children}
    </div>
  )
}

export default CardRowContent;
