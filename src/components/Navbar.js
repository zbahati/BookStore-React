import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <nav>
      <h1>BookStore CMS</h1>
      <ul>
        <li>
          <Link className="active" to="/">Home</Link>
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
  </header>
);

export default Navbar;
