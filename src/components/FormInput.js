import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookApi } from '../redux/book/BookSlice';

const NewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const submitHandler = async (event) => {
    event.preventDefault();
    const newBook = {
      item_id: Date.now().toString(),
      title,
      author,
      category: '',
    };

    await dispatch(addBookApi(newBook));

    // Reset form values after the dispatch is complete
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="newbook">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={submitHandler} className="form-add-book">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=" Book title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder=" Author name"
          required
        />
        <button type="submit" className="add-book">Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;
