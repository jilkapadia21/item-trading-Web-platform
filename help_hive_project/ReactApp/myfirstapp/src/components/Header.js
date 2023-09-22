import React from "react";
import './Header.css';  // Import the CSS file for styles
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header className="bg-dark py-2">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-white mb-0" onClick={() => window.location.href = 'index.html'}>
          HelpHive
        </h1>
        <form className="search-form d-flex">
          <input type="search" className="form-control" placeholder="Search" />
          <button type="submit" className="btn btn-search">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M15.5 14h-.79l-.28-.27a6.54 6.54 0 0 0 1.07-3.76c0-3.59-2.91-6.5-6.5-6.5S2.5 6.38 2.5 10s2.91 6.5 6.5 6.5c1.4 0 2.69-.44 3.76-1.18l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-5 0A4.5 4.5 0 0 1 6 9.5C6 7.02 8.02 5 10.5 5S15 7.02 15 9.5 12.98 14 10.5 14z"
              />
            </svg>
          </button>
        </form>
        <nav>
          <Link to="https://sevasahayog.org/" className="btn btn-primary ml-2">
            About Us</Link>
          <Link to="/Donation_Details" className="btn btn-primary ml-2">
            Donate on HelpHive</Link>
          <Link to="/signin"className="btn btn-primary ml-2">
            Sign in</Link>
          <Link to="/registration" className="btn btn-primary ml-2">
            Register</Link>
        
        </nav>
      </div>
    </header>
  );
}

export default Header;
