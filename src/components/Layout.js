import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? { borderBottom: "2px solid #f4ce14" } : {};

  return (
    <>
      <header className="header">
        <div className="container nav-container">
          <div className="logo">
            Little <span>Lemon</span>
          </div>
          <nav className="nav">
            <Link style={isActive("/")} to="/">
              Home
            </Link>
            <Link style={isActive("/menu")} to="/menu">
              Menu
            </Link>
            <Link style={isActive("/reservations")} to="/reservations">
              Reservations
            </Link>
            <Link style={isActive("/contact")} to="/contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2026 Little Lemon. All rights reserved.</p>
          <p>123 Lemon Street, Chicago, IL</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
