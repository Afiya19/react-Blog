import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  searchQuery: ''  // Add searchQuery to state
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    createBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(blog => blog.id === action.payload.id);
      if (index !== -1) {
        state.blogs[index] = action.payload;
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;  // Set the search query
    }
  }
});

export const { createBlog, updateBlog, deleteBlog, setSearchQuery } = blogSlice.actions;
export default blogSlice.reducer;
