import { RootState } from "app/store";

export const getFavoriteArticle = (state: RootState) => state.persistedReducer.favorites;
