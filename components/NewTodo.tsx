import { useState, useContext, useEffect } from 'react';

import Card from './Card';
import CardRowContent from './CardRowContent';

import { PageContext } from "@store/index";
import { createNewDoc } from '@store/actions';

const NewTodo = () => {
  const { dispatch, state: { isFetching } } = useContext(PageContext);
  const [inputValue, setValue] = useState<string>('');

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

  return (
    <Card>
      <CardRowContent>
        <form className='flex w-calc relative'>
          <input
            id='new-todo-input'
            className='w-full overflow-hidden text-md shadow-none border-none bg-transparent outline-none text-white rounded-md pr-20 pl-3 md:py-1 md:hover:bg-light-bg dark:md:hover:bg-dark-bg'
            value={inputValue}
            onChange={handleChange}
            placeholder="Create a new ToDo"
            readOnly={isFetching}
          />
          {!!inputValue && (
            <button
              disabled={isFetching}
              onClick={handleAddNew}
              className={`absolute right-0 top-1/2 -translate-y-1/2 py-1 pl-3 pr-2 border-l border-l-slate-500 text-white rounded-tr-md rounded-br-md text-center hover:rounded-md md:hover:bg-light-bg dark:md:hover:bg-dark-bg ${isFetching ? 'opacity-50' : ''}`}
            >
              Create
            </button>
          )}
        </form>
      </CardRowContent>
    </Card>
  )
}

export default NewTodo;
