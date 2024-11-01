// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl font-bold">Eiffel Tower Tour</h1>
        <div>
          <Link to="/" className="text-white mx-4 hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white mx-4 hover:underline">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
