import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { records: [], record: null, loading: false, error: null };

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/Posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getPost = createAsyncThunk(
  "post/getPost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/Posts/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "post/addPost",
  async (item, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState();
    item.userId = auth;
    try {
      const res = await fetch("http://localhost:3005/Posts", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePosts = createAsyncThunk(
  "post/deletePosts",
  async (id, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/Posts/${id}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        dispatch(fetchPosts());
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async (item, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/Posts/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      const data = await res.json();
      if (res.status === 200) {
        dispatch(fetchPosts());
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetching Data
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Post Deatails
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
      state.error = null;
      // state.record = null;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Adding Data
    builder.addCase(addPost.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
