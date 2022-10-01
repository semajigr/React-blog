import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightAPI } from "../../services/services";
import { IArticles } from "../../types";

interface ArticleDetailsState {
  articleDetails: IArticles;
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticleDetailsState = {
  isLoading: false,
  error: null,
  articleDetails: {
    id: 0,
    featured: false,
    title: "",
    url: "",
    imageUrl: "",
    newsSite: "",
    summary: "",
    publishedAt: "",
    updatedAt: "",
    launches: [
      {
        id: "",
        provider: "",
      },
    ],
    events: [
      {
        id: "",
        provider: "",
      },
    ],
  },
};

export const fetchArticleByDetails = createAsyncThunk<IArticles, string>(
  "articleDetails/fetchArticleByDetails",
  async (id) => {
    return await spaceFlightAPI.getArticleDetailsById(id);
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
      state.articleDetails = payload;
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
