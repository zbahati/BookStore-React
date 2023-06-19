import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/book/BookSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitHandler = (event) => {
    event.preventDefault();
    const newBook = {
      id: Date.now().toString(),
      title,
      author,
      category: '',
    };

    dispatch(AddBook(newBook));
  };

  return (
    <div className="newbook">
      <h3>ADD BOOK</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=" New Book"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder=" Add Author"
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;
