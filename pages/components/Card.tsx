import { Card } from "../types";

const Card = ({ children, footer }: Card) => {
  return (
    <div className="w-full overflow-hidden rounded-md shadow-md bg-light-card dark:bg-dark-card">
      {children}
      {footer ?? null}
    </div>
  )
}

export default Card;
