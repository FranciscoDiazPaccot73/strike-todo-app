import { EMPTY_STATE } from "./utils/constants";

const EmptyState = () => {
  const handleClick = () => {
    const input = document?.getElementById(EMPTY_STATE.INPUT_ID)
    input?.focus();
  }

  return (
    <p className="text-white text-sm h-14 flex items-center justify-center">
      {EMPTY_STATE.TEXT}
      <span>
        <button aria-label="Create first task" className="ml-2 font-bold underline" onClick={handleClick}>{EMPTY_STATE.LINK_TEXT}</button>
      </span>
    </p>
  )
}

export default EmptyState;
