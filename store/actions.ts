import { types } from './reducers';
import { Todo, TodoWOId } from '@/pages/types';

import { updateDocument, createDoc, getInfo } from '@/services/firebase';

export const isFetching = (dispatch: React.Dispatch<any>, value: boolean) => {
  dispatch({ type: types.FETCHING, value });
};

export const setFilter = (dispatch: React.Dispatch<any>, filter: string, items: Todo[]) => {
  dispatch({ type: types.SET_FILTERED_ITEMS, value: items });
  dispatch({ type: types.SET_FILTER_APPLIED, filter });
};

export const setInitialValues = (dispatch: React.Dispatch<any>, list: Todo[]) => {
  const remainingLength = list.filter((element: Todo) => !element.done).length;

  dispatch({ type: types.SET_INITIAL_VALUES, values: { list, listFiltered: list, remainingLength, filterApplied: 'all' } });
}

export const updateInfo = async (dispatch: React.Dispatch<any>, newValues: Todo) => {
  const { id } = newValues;
  await updateDocument(newValues, id);
  
  dispatch({ type: types.UPDATE_ITEM, item: newValues })
}

export const createNewDoc = async (dispatch: React.Dispatch<any>, newValue: TodoWOId) => {
  isFetching(dispatch, true);
  await createDoc(newValue);
  
  const newInfo = await getInfo();
  isFetching(dispatch, false);
  dispatch({ type: types.ADD_ITEM, newInfo });
}
