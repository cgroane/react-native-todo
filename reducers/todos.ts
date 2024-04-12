import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../types/todo'
import { RootState } from '../store';

interface TodoState {
  todos: Todo[];
}
const initialState = {
  todos: [] as Todo[]
}
export const todosSlice = createSlice({
  initialState,
  name: 'todos',
  reducers: {
    add: (state, { payload }: PayloadAction<Todo>) => {
      state.todos = [...state.todos, payload]
    },
    remove: (state, { payload }: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== payload)
    },
    markComplete: (state, { payload }: PayloadAction<{id: string; complete: boolean}>) => {
      state.todos[state.todos.findIndex((t) => t.id === payload.id)].complete = payload.complete;
    }
  }
});

export const { add, remove, markComplete } = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todo.todos;

export default todosSlice.reducer;
