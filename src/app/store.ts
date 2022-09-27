import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/es/storage";
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
import favoritesReducer from "./feautures/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  user: userReducer,
  articles: articlesReducer,
  blogs: blogsReducer,
  articleDetails: articleDetailsReducer,
  blogDetails: blogDetailsReducer,
  favorites: favoritesReducer,
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
