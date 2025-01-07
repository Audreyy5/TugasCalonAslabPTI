import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../pics/logo1.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-20 font-inter">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-32" />
        </div>

        <button
          className="lg:hidden text-black focus:outline-none z-30"
          onClick={handleMenuToggle}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="text-2xl" />
        </button>

        <ul className="hidden lg:flex lg:space-x-14 text-black font-extrabold">
          <li><Link to="/" className="hover:text-gray-600">Home</Link></li>
          <li><Link to="/profile" className="hover:text-gray-600">Profile</Link></li>
          <li><Link to="/product" className="hover:text-gray-600">Products</Link></li>
          <li><Link to="/promotions" className="hover:text-gray-600">Promotions</Link></li>
          <li><Link to="/contact-us" className="hover:text-gray-600">Contact Us</Link></li>
          <li><Link to="/wikipedia" className="hover:text-gray-600">Wikipedia</Link></li>
        </ul>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <ul className="flex flex-col space-y-4 py-4 px-6 text-black font-bold">
          <li><Link to="/" className="hover:text-gray-600" onClick={handleMenuToggle}>Home</Link></li>
          <li><Link to="/profile" className="hover:text-gray-600" onClick={handleMenuToggle}>Profile</Link></li>
          <li><Link to="/product" className="hover:text-gray-600" onClick={handleMenuToggle}>Products</Link></li>
          <li><Link to="/promotions" className="hover:text-gray-600" onClick={handleMenuToggle}>Promotions</Link></li>
          <li><Link to="/contact-us" className="hover:text-gray-600" onClick={handleMenuToggle}>Contact Us</Link></li>
          <li><Link to="/wikipedia" className="hover:text-gray-600" onClick={handleMenuToggle}>Wikipedia</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
