import { types } from './reducers';
import { Todo, TodoWOId } from '@/pages/types';

import { updateDocument, createDoc, getInfo, deleteDocument } from '@/services/firebase';

export const isFetching = (dispatch: React.Dispatch<any>, value: boolean) => {
  dispatch({ type: types.FETCHING, value });
};

export const setModalContent = (dispatch: React.Dispatch<any>, modal: any) => {
  dispatch({ type: types.SET_MODAL_CONTENT, modal });
};

export const setFilter = (dispatch: React.Dispatch<any>, filter: string, items: Todo[]) => {
  dispatch({ type: types.SET_FILTERED_ITEMS, value: items });
  dispatch({ type: types.SET_FILTER_APPLIED, filter });
};

export const setFilteredItems = (dispatch: React.Dispatch<any>, items: Todo[]) => {
  dispatch({ type: types.SET_FILTERED_ITEMS, value: items });
  dispatch({ type: types.SET_LIST, items });
}

export const setInitialValues = (dispatch: React.Dispatch<any>, list: Todo[]) => {
  const remainingLength = list.filter((element: Todo) => !element.done).length;
  const doneTasks = list.filter((element: Todo) => element.done);

  dispatch({ type: types.SET_INITIAL_VALUES, values: { list, doneTasks, listFiltered: list, remainingLength, filterApplied: 'all' } });
}

export const updateInfo = async (dispatch: React.Dispatch<any>, newValues: Todo) => {
  const { id } = newValues;

  dispatch({ type: types.UPDATE_ITEM, item: newValues })

  try {
    await updateDocument(newValues, id);
  } catch (err) {
    dispatch({ type: types.RESET_LIST })
  }
}

export const createNewDoc = async (dispatch: React.Dispatch<any>, newValue: TodoWOId) => {
  isFetching(dispatch, true);
  await createDoc(newValue);
  
  const newInfo = await getInfo();
  isFetching(dispatch, false);
  dispatch({ type: types.ADD_ITEM, newInfo });
}

export const deleteDoc = async (id: string) => {
  return await deleteDocument(id);
}

export const deleteDocs = async (dispatch: React.Dispatch<any>, todos: Todo[]) => {
  const ids: string[] = [];
  const promises: any[] = [];
  dispatch({ type: types.REMOVE_ITEMS, ids });

  todos.forEach(async (todo: Todo) => {
    ids.push(todo.id);
    promises.push(await deleteDoc(todo.id));
  })

  try {
    await Promise.all(promises);
  } catch (err) {
    dispatch({ type: types.RESET_LIST })
  }
}
