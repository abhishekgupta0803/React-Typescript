import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>MyWebsite</h2>

      <ul style={styles.navLinks}>
        <li>
          <a href="/" style={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={styles.link}>
            About
          </a>
        </li>
        <li>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#1f2937",
  },
  logo: {
    color: "#ffffff",
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default Navbar;