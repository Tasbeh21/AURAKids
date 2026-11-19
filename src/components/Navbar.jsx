import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        AURA<span>|</span>Kids
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}