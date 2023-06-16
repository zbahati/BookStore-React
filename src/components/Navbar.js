import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <h1>BookStore</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Category">Category</Link>
      </li>
    </ul>
    <div className="profile">
      <button type="button">
        <i className="fa-solid fa-user" />
      </button>
    </div>
  </nav>
);

export default Navbar;
