import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { spaceFlightAPI } from "../../services/services";
import { IArticles } from "../../types";

interface BlogDetailsState {
  details: IArticles;
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogDetailsState = {
  isLoading: false,
  error: null,
  details: {},
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
      state.details = payload;
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
