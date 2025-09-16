import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold hover:text-red-200 transition-colors">
              MARVEL
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className="hover:text-red-200 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/characters/1" 
              className="hover:text-red-200 transition-colors font-medium"
            >
              Characters
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
