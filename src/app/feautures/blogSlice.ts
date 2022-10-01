import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlightAPI } from "../../services/services";
import { IArticles, IBlogs } from "../../types";

interface BlogsState {
  blogs: IBlogs[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BlogsState = {
  blogs: [],
  isLoading: false,
  error: null,
};

const fetchBlogs = createAsyncThunk<IBlogs[], undefined, { rejectValue: string }>(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      return await spaceFlightAPI.getAllBlogs();
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  }
);

const fetchSelectBlogs = createAsyncThunk<IBlogs[], string, { rejectValue: string }>(
  "articles/fetchSelectBlogs",
  async (value, { rejectWithValue }) => {
    try {
      return await spaceFlightAPI.getSelectBlogs(value);
    } catch (error) {
      const AxiosError = error as AxiosError;
      return rejectWithValue(AxiosError.message);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchSelectBlogs.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSelectBlogs.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.blogs = payload;
    });
    builder.addCase(fetchSelectBlogs.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default blogsSlice.reducer;
export { fetchBlogs, fetchSelectBlogs };
