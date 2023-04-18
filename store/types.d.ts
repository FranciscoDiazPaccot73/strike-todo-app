import { Todo } from "@/pages/types";

interface Modal {
  text: string,
}

type StateType = {
  list: Todo[],
  listFiltered: Todo[] | Array,
  filterApplied: string,
  remainingLength: number,
  isFetching: boolean,
  modal: Modal | null
}

export type AppContextType = {
  state: StateType,
  dispatch: React.Dispatch<any>,
};
