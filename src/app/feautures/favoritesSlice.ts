import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Favorites } from "../../components";
import { IArticles } from "../../types";

interface FavoritesState {
  favorites: IArticles[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }: PayloadAction<IArticles>) {
      const result = state.favorites.find((article) => article.id === payload.id);
      if (!result) state.favorites.push(payload);
    },
    removeFavorites(state, { payload }: PayloadAction<IArticles>) {
      state.favorites = state.favorites.filter((article) => {
        return article.id !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFavorites } = favoritesSlice.actions;
