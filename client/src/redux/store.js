import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import blogReducer from './blog/blogSlice'; // Import blog reducer

const store = configureStore({
  reducer: {
    theme: themeReducer,
    blogs: blogReducer,  // Add blogs reducer
  }
});

export default store;
