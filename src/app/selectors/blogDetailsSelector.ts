import { RootState } from "../store";

export const getDetailsBlog = (state: RootState) => state.persistedReducer.blogDetails;
