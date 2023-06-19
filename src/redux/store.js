import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/BookSlice';
import categoryReducer from './categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});

export default store;
