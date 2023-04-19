export interface Todo {
  id: string,
  label: string,
  done: boolean,
}

export interface TodoWOId {
  label: Todo['label'],
  done: Todo['done'],
}

export interface Filters {
  active: Todo[],
  completed: Todo[],
}

export type Modal = {
  content?: Todo[],
  resetModal: () => void,
  onAction: (todos: Todop[]) => void,
}

export type Card = {
  children: React.ReactElement,
}

export type CardRowContent = {
  children: React.ReactElement | string,
  checkboxName: string,
  done?: boolean,
  actionable?: boolean,
  onAction?: () => void,
}

export type Checkbox = {
  checked: CardRowContent['done'],
  onAction: CardRowContent['onAction']
  name: CardRowContent['checkboxName'],
  className: string,
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
  setFilter: (value: string) => void,
}

export type CardFooterAction = {
  isActive: boolean,
  label: string,
  onClick: CardFooter['setFilter'],
  disabled?: boolean,
}
