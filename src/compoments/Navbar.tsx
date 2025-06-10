import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper to close menu after navigation
  const handleMobileLinkClick = () => setMenuOpen(false);

  return (
    <nav className="bg-violet-800 shadow px-6 py-4 w-full">
      <div className="flex justify-between items-center">
        <Link
          to="/#home"
          className="font-bold text-indigo-100 hover:text-violet-300 text-2xl"
          onClick={handleMobileLinkClick}>
          Lazy Schedule
        </Link>

        {/* Hamburger menu button */}
        <button
          className="md:hidden focus:outline-none text-indigo-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
            />
          </svg>
        </button>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 font-semibold">
          <Link
            to="/#features"
            className="text-indigo-100 hover:text-violet-300 transition">
            Features
          </Link>
          <Link
            to="/#about"
            className="text-indigo-100 hover:text-violet-300 transition">
            About
          </Link>
          <Link
            to="/#contact"
            className="text-indigo-100 hover:text-violet-300 transition">
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 font-semibold">
          <Link
            to="/#features"
            className="text-indigo-100 hover:text-violet-300 transition"
            onClick={handleMobileLinkClick}>
            Features
          </Link>
          <Link
            to="/#about"
            className="text-indigo-100 hover:text-violet-300 transition"
            onClick={handleMobileLinkClick}>
            About
          </Link>
          <Link
            to="/#contact"
            className="text-indigo-100 hover:text-violet-300 transition"
            onClick={handleMobileLinkClick}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
