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
  active: Todo[],
  completed: Todo[],
}

export type FilterValue = 'active' | 'completed';

export type Modal = {
  content?: Todo[],
  resetModal: any,
  onAction: any,
}

export type Card = {
  children: React.ReactElement,
}

export type CardRowContent = {
  children: React.ReactElement | string,
  isDone?: boolean,
  actionable?: boolean,
  onAction?: any,
  // onAction?: (event: ChangeEvet<HTMLInputElement>) => Todo,
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
  disabled?: boolean,
}
