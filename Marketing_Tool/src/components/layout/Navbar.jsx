import Button from "../ui/Button";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="logo">MarkeTeer</div>

          <ul className="nav-links">
            <li>Product</li>
            <li>Pricing</li>
            <li>Login</li>
            <Button>Get Started</Button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;