import { Todo } from "@/pages/types";
import { getListFiltered, getRemaining } from "@/utils";

export const types = {
  FETCHING: 'FETCHING',
  SET_INITIAL_VALUES: 'set/INITIAL_VALUES',
  SET_ITEMS: 'set/ITEMS',
  SET_FILTERED_ITEMS: 'set/FILTERED_ITEMS',
  SET_REMAINING: 'set/REMAINING',
  SET_FILTER_APPLIED: 'set/FILTER_APPLIED',
  UPDATE_ITEM: 'update/ITEM',
  ADD_ITEM: 'add/ITEM',
};

export const init = (config: any) => {
  return {
    ...config,
    list: [],
    listFiltered: [],
    filterApplied: 'all',
    remainingLength: 0,
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
    case types.SET_FILTER_APPLIED: {
      return {...state, filterApplied: action.filter}
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
      const newRemaining = getRemaining(newList);

      return { ...state, list: newList, listFiltered: newListFiltered, remainingLength: newRemaining };
    }
    case types.ADD_ITEM: {
      const { newInfo } = action;
      const { filterApplied } = state;

      const newListFiltered = getListFiltered(newInfo, filterApplied);
      const newRemaining = getRemaining(newInfo);

      console.log(newListFiltered)

      return { ...state, list: newInfo, listFiltered: newListFiltered, remainingLength: newRemaining };
    }
    default:
      return null;
  }
};
