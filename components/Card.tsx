import { FC } from "react";

type CardProps = {
  children: React.ReactElement
}

const CardComponent: FC<CardProps> = ({ children }) => (
  <div className="w-full overflow-hidden rounded-md shadow-md bg-light-card dark:bg-dark-card">
    {children}
  </div>
)

export default CardComponent;
