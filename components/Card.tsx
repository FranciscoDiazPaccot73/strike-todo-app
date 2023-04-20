import { FC, PropsWithChildren } from "react";

const CardComponent: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full overflow-hidden rounded-md shadow-md bg-light-card dark:bg-dark-card">
    {children}
  </div>
)

export default CardComponent;
