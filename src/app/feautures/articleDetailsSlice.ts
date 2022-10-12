import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlightAPI } from "services/SpaceFlightAPI";
import { IArticles } from "types";

interface ArticleDetailsState {
  articleDetails: IArticles;
  isLoading: boolean;
  error: null | string;
  similar: IArticles[];
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
  similar: [],
};

export const fetchArticleByDetails = createAsyncThunk<
  { articleDetails: IArticles; similar: any },
  string,
  { rejectValue: string }
>("articleDetails/fetchArticleByDetails", async (id, { rejectWithValue }) => {
  try {
    const articleDetails = await spaceFlightAPI.getArticleDetailsById(id);
    const name = articleDetails.title.split(" ")[0];
    const similar = await spaceFlightAPI.getArticlesSimilar(name);

    return { articleDetails, similar };
  } catch (error) {
    const AxiosError = error as AxiosError;
    return rejectWithValue(AxiosError.message);
  }
});

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
      state.articleDetails = payload.articleDetails;
      state.similar = payload.similar;
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
