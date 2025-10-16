import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-content">
          <p className="copyright">
            &copy; 2024 PowerPuff Adventures. Todos los derechos reservados.
          </p>

          <div className="social-links" aria-label="Enlaces sociales">
            <a href="#" className="social-link" aria-label="App">
              📱
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="#" className="social-link" aria-label="Facebook">
              📘
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
