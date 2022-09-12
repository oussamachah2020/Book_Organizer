import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import uploadReducer from "../features/upload/uplaodSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
  },
});
