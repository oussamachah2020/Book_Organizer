import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import uploadService from "../uploadService";

const initialState = {
  book: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const push = createAsyncThunk("upload/push", async (book, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await uploadService.push(book, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const uploadSlice = createSlice({
  name: "upload",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(push.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(push.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload;
      })
      .addCase(push.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});
export const { reset } = uploadSlice.actions;
export default uploadSlice.reducer;
