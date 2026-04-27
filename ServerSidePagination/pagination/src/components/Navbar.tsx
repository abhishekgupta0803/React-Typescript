import { useState } from "react"
import "./navbar.style.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;