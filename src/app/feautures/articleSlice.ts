import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlightAPI } from "services/services";
import { IArticles } from "types";

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

const fetchArticles = createAsyncThunk<IArticles[], undefined, { rejectValue: string }>(
  "articles/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      return await spaceFlightAPI.getAllArticles();
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  }
);

const fetchSelectArticles = createAsyncThunk<IArticles[], string, { rejectValue: string }>(
  "articles/fetchSelectArticles",
  async (value, { rejectWithValue }) => {
    try {
      return await spaceFlightAPI.getSelectArticles(value);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  }
);

const fetchSearchArticles = createAsyncThunk<IArticles[], string, { rejectValue: string }>(
  "articles/fetchSearchArticles",
  async (word, { rejectWithValue }) => {
    try {
      return await spaceFlightAPI.getSearchArticles(word);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  }
);

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

    builder.addCase(fetchSelectArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSelectArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchSelectArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchSearchArticles.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.articles = payload;
    });
    builder.addCase(fetchSearchArticles.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default articlesSlice.reducer;
export { fetchArticles, fetchSelectArticles, fetchSearchArticles };
