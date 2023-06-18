import { createSlice } from '@reduxjs/toolkit';
import books from '../../components/bookItems';

const initialState = {
  books,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      state.books.push(action.payload);
    },

    RemoveBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },

});

export default bookSlice.reducer;
export const { AddBook, RemoveBook } = bookSlice.actions;
