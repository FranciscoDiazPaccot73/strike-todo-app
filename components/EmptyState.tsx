const EmptyState = () => {
  const handleClick = () => {
    const input = document?.getElementById('new-todo-input')
    input?.focus();
  }

  return (
    <p className="text-white text-sm h-14 flex items-center justify-center">
      Nothing here yet.
      <span><button className="ml-2 font-bold underline" onClick={handleClick}>Start adding a task :)</button></span>
    </p>
  )
}

export default EmptyState;
