import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          MyShop 🛒
        </Link>
        <div>
          <Link to="/" className="btn btn-link text-decoration-none me-2">
            Home
          </Link>
          <Link to="/cart" className="btn btn-outline-primary rounded-pill">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}
