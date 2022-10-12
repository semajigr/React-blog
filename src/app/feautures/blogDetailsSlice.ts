import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { spaceFlightAPI } from "services/SpaceFlightAPI";
import { IArticles, IBlogs } from "types";

interface BlogDetailsState {
  blogDetails: IArticles;
  isLoading: boolean;
  error: null | string;
  similar: IArticles[];
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
  similar: [],
};

export const fetchBlogByDetails = createAsyncThunk<
  { blogDetails: IBlogs; similar: any },
  string,
  { rejectValue: string }
>("blogDetails/fetchBlogByDetails", async (id, { rejectWithValue }) => {
  try {
    const blogDetails = await spaceFlightAPI.getBlogDetailsById(id);
    const name = blogDetails.title.split(" ")[0];
    const similar = await spaceFlightAPI.getBlogsSimilar(name);

    return { blogDetails, similar };
  } catch (error) {
    const AxiosError = error as AxiosError;
    return rejectWithValue(AxiosError.message);
  }
});

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
      state.blogDetails = payload.blogDetails;
      state.similar = payload.similar;
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
