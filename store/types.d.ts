import { Todo } from "@/pages/types";

type StateType = {
  list: Todo[],
  listFiltered: Todo[] | Array,
  filterApplied: string,
  remainingLength: number,
  isFetching: boolean,
}

export type AppContextType = {
  state: StateType,
  dispatch: React.Dispatch<any>,
};
