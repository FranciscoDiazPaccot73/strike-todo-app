import { Todo, Filters, FilterValue } from "@/pages/types";

export const getRemaining = (list: Todo[]): number => {
  const newList = list.filter((element: Todo) => !element.done)

  return newList.length;
}

export const getListFiltered = (list: Todo[], value: FilterValue) => {
  const filters: Filters = {
    active: list.filter((elem: Todo) => !elem.done),
    completed: list.filter((elem: Todo) => elem.done),
  }

  return filters[value] || list;
}

export const getDoneTasks = (list: Todo[]) => {
  return list.filter((element: Todo) => element.done);
}
