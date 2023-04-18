import { Todo } from "@/pages/types";

type StateType = {
  list: Todo[] | Array,
  listFiltered: Todo[] | Array,
  filterApplied: string,
  remainingLength: number,
  isFetching: boolean,
  modal: Todo[] | null,
  doneTasks: Todo[] | Array,
}

export type AppContextType = {
  state: StateType,
  dispatch: React.Dispatch<any>,
};
