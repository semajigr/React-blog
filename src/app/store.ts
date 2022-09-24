import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import articlesReducer from "./feautures/articleSlice";
import blogsReducer from "./feautures/blogSlice";
import articleDetailsReducer from "./feautures/articleDetailsSlice";
import blogDetailsReducer from "./feautures/blogDetailsSlice";
import userReducer from "./feautures/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites", "user"],
};

const rootReducer = combineReducers({
  articles: articlesReducer,
  blogs: blogsReducer,
  articleDetails: articleDetailsReducer,
  user: userReducer,
  blogDetails: blogDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
