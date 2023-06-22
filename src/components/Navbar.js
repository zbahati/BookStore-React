import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>

      <ul>
        <li>
          {' '}
          <h1>BookStore CMS</h1>
        </li>
        <li>
          <Link className="active" to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="/Category">CATEGORIES</Link>
        </li>
      </ul>
      <div className="profile">
        <button type="button">
          <i className="fa-solid fa-user" />
        </button>
      </div>
    </nav>
  </header>
);

export default Navbar;
