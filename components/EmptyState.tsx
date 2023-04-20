import { EMPTY_STATE } from "./utils/constants";

const EmptyState = () => {
  const handleClick = () => {
    const input = document?.getElementById(EMPTY_STATE.INPUT_ID)
    input?.focus();
  }

  return (
    <p className="text-black text-sm h-14 flex items-center justify-center dark:text-white">
      {EMPTY_STATE.TEXT}
      <span>
        <button aria-label="Create first task" className="ml-2 font-bold underline" onClick={handleClick}>{EMPTY_STATE.LINK_TEXT}</button>
      </span>
    </p>
  )
}

export default EmptyState;
