import { Todo } from "@/pages/types";

type StateType = {
  list: Todo[],
  listFiltered: Todo[],
  filterApplied: string,
  remainingLength: number,
  isFetching: boolean,
  modal?: Todo[],
  doneTasks: Todo[],
}

export type AppContextType = {
  state: StateType,
  dispatch: React.Dispatch<any>,
};
