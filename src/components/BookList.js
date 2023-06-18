import { useDispatch, useSelector } from 'react-redux';
import { RemoveBook } from '../redux/book/BookSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  return (
    <div className="list">
      <h3>Book List</h3>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>
              {book.title}
              {' '}
            </span>
            <br />
            <span>{book.author}</span>
            <span>{book.category}</span>
            <button type="button" className="delete-button" title="delete" onClick={() => dispatch(RemoveBook(book.id))}>
              <span>Remove</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
