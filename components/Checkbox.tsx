import { Checkbox } from "@pages/types";

const Checkbox = ({ checked, name, className, onAction }: Checkbox) => (
  <input type="checkbox" name={name} checked={checked} className={className} onChange={onAction} />
)

export default Checkbox;