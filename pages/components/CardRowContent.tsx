import { CardRowContent } from "../types";

const CardRowContent = ({ isDone, children }: CardRowContent) => {

  return (
    <div className="w-full h-full p-4 flex items-center gap-3 md:gap-4">
      <div className="rounded-full w-6 h-6 border border-white z-10 cursor-pointer md:h-7 md:w-7" />
      {children}
    </div>
  )
}

export default CardRowContent;
