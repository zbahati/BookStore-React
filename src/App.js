import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Book from './Routes/Book';
import Category from './Routes/Category';
import ErrorPage from './Routes/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/Category" element={<Category />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
