import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50 py-4 border-b border-indigo-100">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
      <h1 className="text-3xl font-bold text-indigo-700 tracking-wide">Aanya's Portfolio</h1>
      <div className="flex space-x-6 text-lg font-medium">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
        <Link to="/projects" className="hover:text-indigo-600 transition">Projects</Link>
        <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;