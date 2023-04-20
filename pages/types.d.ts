export interface Todo {
  id: string
  label: string
  done: boolean
}

export interface TodoWOId {
  label: Todo['label']
  done: Todo['done']
}

export interface Filters {
  active: Todo[]
  completed: Todo[]
}

export type TodoList = {
  list: Todo[]
}
