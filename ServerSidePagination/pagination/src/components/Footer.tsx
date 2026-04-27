import "../components/footer.style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2>MyApp</h2>
          <p>Your movie hub for latest and trending content.</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Social */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">YouTube</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;