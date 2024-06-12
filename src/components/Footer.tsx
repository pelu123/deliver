import { Link } from "react-router-dom"

export default function Footer() {
    return (
      <footer className="footer-container">
        <h1 className="footer-title">NAVIGATION</h1>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
      </footer>
    );
}