import { configureStore }from '@reduxjs/toolkit';
import todosSlice from './reducers/todos';

const store = configureStore({
  reducer: {
    todo: todosSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;