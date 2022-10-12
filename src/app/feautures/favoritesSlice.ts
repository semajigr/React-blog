import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticles } from "types";

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
      const result = state.favorites.find(({ id }) => id === payload.id);
      if (!result) state.favorites.push(payload);
    },
    removeFavorites(state, { payload }: PayloadAction<number>) {
      state.favorites = state.favorites.filter(({ id }) => {
        return id !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavorites, removeFavorites } = favoritesSlice.actions;
