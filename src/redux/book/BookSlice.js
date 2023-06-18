import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddBook: () => {},

    RemoveBook: () => {},
  },

});

export default bookSlice.reducer;
export const { AddBook, RemoveBook } = bookSlice.actions;
