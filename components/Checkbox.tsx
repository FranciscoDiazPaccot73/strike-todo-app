import { FC } from "react";

import { CardRowContentProps } from "./CardRowContent";

type CheckboxProps = {
  checked: CardRowContentProps['done']
  onAction: CardRowContentProps['onAction']
  name: CardRowContentProps['checkboxName']
  disabled: boolean
  className: string
}

const Checkbox: FC<CheckboxProps> = ({ checked, name, className, onAction, disabled }) => (
  <input type="checkbox" name={name} aria-label={name} checked={checked} disabled={disabled} className={className} onChange={onAction} />
)

export default Checkbox;
