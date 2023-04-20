import { Checkbox } from "@pages/types";

const Checkbox = ({ checked, name, className, onAction, disabled }: Checkbox) => (
  <input type="checkbox" name={name} aria-label={name} checked={checked} disabled={disabled} className={className} onChange={onAction} />
)

export default Checkbox;
