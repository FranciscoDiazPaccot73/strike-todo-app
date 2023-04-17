import { useState } from 'react';

import Card from './Card';
import CardRowContent from './CardRowContent';

//<p className='dark:text-white'>Create a new ToDo</p>

const NewTodo = () => {
  const [inputValue, setValue] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  }

  return (
    <Card>
      <CardRowContent>
        <div className='flex w-calc relative'>
          <input
            className='w-full overflow-hidden text-md shadow-none border-none bg-transparent outline-none text-white rounded-full pr-20 pl-3 md:py-1 md:hover:bg-slate-700'
            value={inputValue}
            onChange={handleChange}
            placeholder="Create a new ToDo"
          />
          {inputValue ? (
            <button
              className='absolute right-0 top-1/2 -translate-y-1/2 py-1 pl-3 pr-2 border-l border-l-slate-500 text-white rounded-tr-full rounded-br-full hover:bg-slate-700'
            >
              Create
            </button>
          ) : null}
        </div>
      </CardRowContent>
    </Card>
  )
}

export default NewTodo;
