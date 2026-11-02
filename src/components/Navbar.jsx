
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "JOURNAL", href: "/journal" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="vyne-navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        VYNE<span></span>
      </Link>

      <div
        id="vyne-navigation"
        className={`navbar-links ${menuOpen ? "active" : ""}`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            {link.label}
          </NavLink>
        ))}

        <Link
          to="/contact"
          className="navbar-mobile-cta"
          onClick={closeMenu}
        >
          START A PROJECT <span></span>
        </Link>
      </div>

      <Link
        to="/contact"
        className="navbar-cta"
        onClick={closeMenu}
      >
        START A PROJECT <span></span>
      </Link>

      <button
        type="button"
        className={`navbar-menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="vyne-navigation"
      >
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
