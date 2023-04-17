export interface Todo {
  id: string,
  label: string,
  done: boolean,
}

export interface TodoWOId {
  label: string,
  done: boolean,
}

export interface Filters {
  active: Todo[] | Array,
  completed: Todo[] | Array,
}

export type FilterValue = 'active' | 'completed';

export type Card = {
  children: React.ReactElement,
  footer?: React.ReactElement,
}

export type CardRowContent = {
  children: React.ReactElement | string,
  isDone?: boolean,
  actionable?: boolean,
  onAction?: any,
}

export type ThemeToggle = {
  onClick: any,
  theme: string,
}

export type TodoList = {
  list: Todo[]
}

export type TodoItem = {
  item: Todo
}

export type CardFooter = {
  length: number,
  filterApplied: string,
  setFilter: any,
}

export type CardFooterAction = {
  isActive: boolean,
  label: string,
  onClick: any,
}
