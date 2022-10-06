import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightAPI } from "services/services";
import { IArticles } from "types";

interface BlogDetailsState {
  blogDetails: IArticles;
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogDetailsState = {
  isLoading: false,
  error: null,
  blogDetails: {
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

export const fetchBlogByDetails = createAsyncThunk<IArticles, string>(
  "blogDetails/fetchBlogByDetails",
  async (id) => {
    return await spaceFlightAPI.getBlogDetailsById(id);
  }
);

const blogDetailsSlice = createSlice({
  name: "blogDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogByDetails.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchBlogByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogDetails = payload;
    });
    builder.addCase(fetchBlogByDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = null;
      }
    });
  },
});

export default blogDetailsSlice.reducer;
