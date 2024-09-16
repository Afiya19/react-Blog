import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';
import blogReducer from './blog/blogSlice'; 

const store = configureStore({
  reducer: {
    theme: themeReducer,
    blogs: blogReducer,  
  }
});

export default store;
