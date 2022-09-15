import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { articleAPI } from "../../services/articleAPI";
import { IArticles } from "../../types";

interface ArticlesState {
  articles: IArticles[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: null,
};

const fetchArticles = createAsyncThunk<
  IArticles[],
  undefined,
  { rejectValue: string }
>("articles/fetchArticles", async () => {
  return await articleAPI.getAllArticles();
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
export { fetchArticles };
