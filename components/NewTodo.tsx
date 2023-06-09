import { useState, useContext, useEffect } from 'react';
import clsx from 'clsx';

import Card from './Card';
import CardRowContent from './CardRowContent';

import { PageContext } from "@store/index";
import { createNewDoc } from '@store/actions';
import { INPUT_CONFIRM, INPUT_PLACEHOLDER } from './utils/constants';

const NewTodo = () => {
  const { dispatch, state: { isFetching } } = useContext(PageContext);
  const [inputValue, setValue] = useState<string>('');
  const buttonClasses = clsx("absolute right-0 top-1/2 -translate-y-1/2 py-1 pl-3 pr-2 border-l border-l-slate-500 text-black rounded-tr-md rounded-br-md text-center hover:rounded-md md:hover:bg-light-bg dark:md:hover:bg-dark-bg dark:text-white", {
    "opacity-50": isFetching,
  })

  useEffect(() => {
    if (!isFetching) setValue('');
  }, [isFetching])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  }

  const handleAddNew = () => {
    if (!isFetching) {
      createNewDoc(dispatch, { done: false, label: inputValue })
    }
  }

  const createOnEnter = (e: { key: string; keyCode: number; }) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      handleAddNew()
    }
  }

  return (
    <Card>
      <CardRowContent checkboxName='Disabled checkbox only for input'>
        <form className='flex w-calc relative'>
          <input
            id='new-todo-input'
            className='w-full overflow-hidden text-md shadow-none border-none bg-transparent outline-none text-black dark:text-white rounded-md pr-20 pl-3 md:py-1 md:hover:bg-light-bg dark:md:hover:bg-dark-bg'
            value={inputValue}
            onChange={handleChange}
            placeholder={INPUT_PLACEHOLDER}
            readOnly={isFetching}
            onKeyUp={createOnEnter}
          />
          {!!inputValue && (
            <button
              aria-label={`Confirm create ${inputValue}`}
              disabled={isFetching}
              onClick={handleAddNew}
              className={buttonClasses}
            >
              {INPUT_CONFIRM}
            </button>
          )}
        </form>
      </CardRowContent>
    </Card>
  )
}

export default NewTodo;
