import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightAPI } from "../../services/services";
import { IArticles } from "../../types";

interface ArticleDetailsState {
  details: IArticles;
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticleDetailsState = {
  isLoading: false,
  error: null,
  details: {},
};

export const fetchArticleByDetails = createAsyncThunk<IArticles, string>(
  "articleDetails/fetchArticleByDetails",
  async (id) => {
    return await spaceFlightAPI.getDetailsById(id);
  }
);

const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchArticleByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
    });
    builder.addCase(fetchArticleByDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export default articleDetailsSlice.reducer;
