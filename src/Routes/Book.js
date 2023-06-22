import BookList from '../components/BookList';
import NewBook from '../components/FormInput';

const Book = () => (
  <div>
    <BookList />
    <hr className="line" />
    <NewBook />
  </div>
);

export default Book;
