import { Todo, Filters } from "@/pages/types";

export const getRemaining = (list: Todo[]): number => {
  const newList = list.filter((element: Todo) => !element.done)

  return newList.length;
}

export const getListFiltered = (list: Todo[], value: string) => {
  const filters: Filters = {
    active: list.filter((elem: Todo) => !elem.done),
    completed: list.filter((elem: Todo) => elem.done),
  }

  if (value in filters) {
    const key = value as keyof typeof filters;
    return filters[key];
  }

  return list;
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

export const isActive = (filterApplied: string, filterButton: string) => filterApplied === filterButton;

type ThemeType = {
  light: { alt: string; src: string, ariaLabel: string };
  dark: { alt: string; src: string, ariaLabel: string };
};

export const getToggleInfo = (theme: string) => {
  const imageInfo: ThemeType = {
    light: { alt: "Use Dark Mode", src: "/moon.svg", ariaLabel: 'Change to dark mode' },
    dark: { alt: "Use Light Mode", src: "/sun.svg", ariaLabel: 'Change to light mode' },
  };

  if (theme in imageInfo) {
    const themeKey = theme as keyof typeof imageInfo;
    return imageInfo[themeKey];
  }

  return { alt: "Use Light Mode", src: "/sun.svg", ariaLabel: 'Change to light mode' };
}
