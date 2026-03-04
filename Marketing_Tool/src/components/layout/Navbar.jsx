import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <Link to="/" className="logo-link">Margroms</Link>
          </div>

          <ul className="nav-links">
            <li>Product</li>
            <li>Pricing</li>
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Button to="/signup">
                Get Started
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
