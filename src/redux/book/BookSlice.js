import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import books from '../../components/bookItems';

const initialState = {
  books,
  isloading: false,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/fMTlag0rSBA6RI8ptwgh/books';
export const fetchBooks = createAsyncThunk('book/fetchBooks', async () => {
  const response = await axios(url);
  return response;
});

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

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isloading = true;
      state.books = [];
    });

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isloading = false;
      state.books = action.payload;
    });
  },

});

export default bookSlice.reducer;
export const { AddBook, RemoveBook } = bookSlice.actions;
