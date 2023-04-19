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

const persistInLocalStorage = (theme: string) => {
  localStorage.setItem('strike-todo-theme', theme);
}

export const updateBodyClass = (newTheme: string) => {
  document.body.classList.remove('light', 'dark')
  document.body.classList.add(newTheme)

  persistInLocalStorage(newTheme);
}

export const getLocalStorageTheme = () => localStorage.getItem('strike-todo-theme')
