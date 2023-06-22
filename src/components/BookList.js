import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBookApi, fetchBooks } from '../redux/book/BookSlice';
import CircularProgress from './CircularProgressbar';
import Chapter from './chapter';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch, books]);

  const DeleteHandler = (key) => {
    dispatch(DeleteBookApi(key));
  };

  return (
    <div className="list">
      <ul className="books">
        {Object.keys(books)
          && Object.keys(books).map((key) => books[key].map((book) => (
            <li key={key}>
              <div className="card-layout">
                <div className="book-card">
                  <small id="book-category">Action</small>
                  <p>{book.title}</p>
                  <small>{book.author}</small>
                  <div className="button-card">
                    <button type="button">Comments</button>
                    <button type="button" onClick={() => DeleteHandler(key)}>
                      Remove
                    </button>
                    <button type="button">Edit</button>
                  </div>
                </div>
                <CircularProgress />
                <Chapter />
              </div>
            </li>
          )))}
      </ul>
    </div>
  );
};

export default BookList;
