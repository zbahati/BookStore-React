import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBookApi, fetchBooks } from '../redux/book/BookSlice';

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
      <h3>Book List</h3>
      <ul>
        {Object.keys(books)
          && Object.keys(books).map((key) => books[key].map((book) => (
            <li key={key}>
              <div>
                Title:
                {book.title}
              </div>
              <div>
                Author:
                {book.author}
              </div>
              <div>
                <button type="button" onClick={() => DeleteHandler(key)}> Remove</button>
              </div>
            </li>
          )))}
      </ul>
    </div>
  );
};

export default BookList;
