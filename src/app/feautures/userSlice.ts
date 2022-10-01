import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFirebaseMessage } from "../../utils";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseErrorCode, FirebaseError } from "../../utils/firebaseErrors";

interface IUserState {
  email: string;
  name: string;
  isPendingAuth: boolean;
  error: null | FirebaseError;
  isAuth: boolean;
  creationTime: string;
}

const initialState: IUserState = {
  email: "",
  name: "",
  isPendingAuth: false,
  error: null,
  isAuth: false,
  creationTime: "",
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string; name: string },
  { email: string; password: string; userName: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password, userName }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const creationTime = userCredential.user.metadata.creationTime as string;
    const userEmail = userCredential.user.email as string;
    const name = userName as string;

    return { creationTime, userEmail, name };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const creationTime = userCredential.user.metadata.creationTime as string;
    const userEmail = userCredential.user.email as string;

    return { creationTime, userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignOut = createAsyncThunk<void, undefined, { rejectValue: FirebaseError }>(
  "user/fetchSignOut",
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserName: (state, { payload }: PayloadAction<string>) => {
      if (payload) state.name = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.creationTime = payload.creationTime;
      state.isAuth = true;
      state.name = payload.name;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isPendingAuth = false;
      state.error = null;
      state.email = payload.userEmail;
      state.isAuth = true;
      state.creationTime = payload.creationTime;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = false;
      }
    });

    builder.addCase(fetchSignOut.pending, (state) => {
      state.isPendingAuth = true;
      state.isAuth = true;
      state.error = null;
    });
    builder.addCase(fetchSignOut.fulfilled, (state) => {
      state.isPendingAuth = false;
      state.error = null;
      state.isAuth = false;
    });
    builder.addCase(fetchSignOut.rejected, (state, { payload }) => {
      if (payload) {
        state.isPendingAuth = false;
        state.error = payload;
        state.isAuth = true;
      }
    });
  },
});

export default userSlice.reducer;
