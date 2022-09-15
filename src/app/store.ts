import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./feautures/articleSlice";
import blogsReducer from "./feautures/blogSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    blogs: blogsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
