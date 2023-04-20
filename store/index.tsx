import React, { useMemo, useReducer, createContext } from 'react';

import { reducer, init } from './reducers';
import { AppContextType } from './types';

export const contextDefaultValues = {
  state: {
    list: [],
    listFiltered: [],
    filterApplied: 'all',
    remainingLength: 0,
    isFetching: false,
    doneTasks: [],
  },
  dispatch: () => {},
};

export const PageContext = createContext<AppContextType>(contextDefaultValues);

const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, init);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
};

export default PageProvider;
