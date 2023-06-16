import { useState } from 'react';

const BookList = () => {
  const [Book] = useState([
    {
      id: 1,
      title: 'Magic Book',
      author: 'Bahati',
    },
    {
      id: 2,
      title: 'Man With The Ambition',
      author: 'Antoine',
    },
  ]);
  return (
    <div className="list">
      <h3>Book List</h3>
      <ul>
        {Book.map((book) => (
          <li key={book.id}>
            <span>
              {book.title}
              {' '}
            </span>
            <br />
            <span>{book.author}</span>
            <button type="button" className="delete-button" title="delete">
              <span className="delete-hide">delete</span>
              <i className="fa-solid fa-trash" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
