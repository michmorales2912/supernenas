import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo pixel-font">Pixel PowerPuff</div>
        <ul className="nav-links">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#characters">Personajes</a></li>
          <li><a href="#smartwatch">Smartwatch</a></li>
          <li><a href="#features">Características</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
