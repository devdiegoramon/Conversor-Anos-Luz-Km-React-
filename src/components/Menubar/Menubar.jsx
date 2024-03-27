import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css';
const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="menubar">
      <button className="hamburger-icon" onClick={toggleMenu}>
        <svg
          viewBox="0 0 100 80"
          width="35"
          height=""
          fill="#ffffff"
          className={isOpen ? 'open' : ''}
        >
          <rect width="90" height="8"></rect>
          <rect y="30" width="90" height="8"></rect>
          <rect y="60" width="90" height="8"></rect>
        </svg>
      </button>
      {isOpen && (
        <div className="sidebar">
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>Página Inicial</Link>
            </li>
            <li>
              <Link to="/Info" onClick={toggleMenu}>Info</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Menubar;
