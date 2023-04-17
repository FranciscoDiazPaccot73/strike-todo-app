export interface Todo {
  id: number,
  label: string,
  done: boolean,
}

export type Card = {
  children: React.ReactElement,
  footer?: React.ReactElement,
}

export type CardRowContent = {
  children: React.ReactElement | string,
  isDone?: boolean = false,
  action?: any,
}

export type ThemeToggle = {
  onClick: any,
  theme: string,
}

export type TodoList = {
  list: Array<Todo>
}

export type TodoItem = {
  item: Todo
}

export type CardFooter = {
  length: number,
  filterApplied: string = 'all',
  setFilter: any,
}

export type CardFooterAction = {
  isActive: boolean,
  label: string,
  onClick: any,
}
