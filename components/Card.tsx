import { FC } from "react";
import { Card } from "@pages/types";

const Card: FC<Card> = ({ children }) => {
  return (
    <div className="w-full overflow-hidden rounded-md shadow-md bg-light-card dark:bg-dark-card">
      {children}
    </div>
  )
}

export default Card;
