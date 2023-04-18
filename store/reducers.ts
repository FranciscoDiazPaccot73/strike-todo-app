import { Todo } from "@/pages/types";
import { getDoneTasks, getListFiltered, getRemaining } from "@/utils";

export const types = {
  FETCHING: 'FETCHING',
  SET_INITIAL_VALUES: 'set/INITIAL_VALUES',
  SET_ITEMS: 'set/ITEMS',
  SET_FILTERED_ITEMS: 'set/FILTERED_ITEMS',
  SET_REMAINING: 'set/REMAINING',
  SET_FILTER_APPLIED: 'set/FILTER_APPLIED',
  SET_LIST: 'set/LIST',
  SET_MODAL_CONTENT: 'set/MODAL_CONTENT', 
  UPDATE_ITEM: 'update/ITEM',
  REMOVE_ITEMS: 'remove/ITEMS',
  ADD_ITEM: 'add/ITEM',
};

export const init = (config: any) => {
  return {
    ...config,
    list: [],
    listFiltered: [],
    filterApplied: 'all',
    remainingLength: 0,
    doneTasks: [],
  };
};

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case types.FETCHING: {
      return {...state, isFetching: action.value}
    }
    case types.SET_FILTERED_ITEMS: {
      return {...state, listFiltered: action.value}
    }
    case types.SET_LIST: {
      return {...state, list: action.items}
    }
    case types.SET_FILTER_APPLIED: {
      return {...state, filterApplied: action.filter}
    }
    case types.SET_MODAL_CONTENT: {
      return {...state, modal: action.modal}
    }
    case types.SET_INITIAL_VALUES: {
      const { values } = action;

      return { ...state, ...values };
    }
    case types.UPDATE_ITEM: {
      const { item } = action;
      const { list, filterApplied } = state;

      const newList = list.map((elem: Todo) => {
        if (elem.id === item.id) {
          return item;
        }

        return elem;
      });

      const newListFiltered = getListFiltered(newList, filterApplied);
      const newDoneTasks = getDoneTasks(newList);
      const newRemaining = getRemaining(newList);

      return { ...state, doneTasks: newDoneTasks, list: newList, listFiltered: newListFiltered, remainingLength: newRemaining };
    }
    case types.ADD_ITEM: {
      const { newInfo } = action;
      const { filterApplied } = state;

      const newListFiltered = getListFiltered(newInfo, filterApplied);
      const newDoneTasks = getDoneTasks(newInfo);
      const newRemaining = getRemaining(newInfo);

      return { ...state, doneTasks: newDoneTasks, list: newInfo, listFiltered: newListFiltered, remainingLength: newRemaining };
    }
    case types.REMOVE_ITEMS: {
      const { ids } = action;
      const { listFiltered, list, remainingLength } = state;

      let newListFiltered: Todo[] = listFiltered;
      let newInfo: Todo[] = list;
      let newRemaining: number = remainingLength;

      ids.forEach((id: string) => {
        newListFiltered = newListFiltered.filter((item: Todo) => item.id !== id)
        newInfo = newInfo.filter((item: Todo) => item.id !== id);
        newRemaining = getRemaining(newInfo);
      });

      return { ...state, list: newInfo, listFiltered: newListFiltered, remainingLength: newRemaining };
    }
    default:
      return null;
  }
};
