import { configureStore } from "@reduxjs/toolkit";
import user from "./authSlice";
import posts from "./PostSlice";
const store = configureStore({
  reducer: {
    posts,
    user,
  },
});

export default store;
