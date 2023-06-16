import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Book from './Routes/Book';
import Category from './Routes/Category';
import ErrorPage from './Routes/ErrorPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/Category" element={<Category />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
