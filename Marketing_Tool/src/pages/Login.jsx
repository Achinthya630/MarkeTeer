import { Link } from "react-router-dom";
import "../styles/auth.css";
import Button from "../components/ui/Button";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page container">
        <div className="auth-card">
          <h2>Welcome back</h2>
          <p className="muted">Log in to your account</p>

          <form className="auth-form">
            <label>
              Email
              <input type="email" placeholder="you@company.com" />
            </label>

            <label>
              Password
              <input type="password" placeholder="Your password" />
            </label>

            <Button variant="primary">Log In</Button>
          </form>

          <p className="auth-footer">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
