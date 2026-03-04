import { Link } from "react-router-dom";
import "../styles/auth.css";
import Button from "../components/ui/Button";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="auth-page container">
        <div className="auth-card">
          <h2>Create an account</h2>
          <p className="muted">Start your free trial</p>

          <form className="auth-form">
            <label>
              Full name
              <input type="text" placeholder="Jane Doe" />
            </label>

            <label>
              Email
              <input type="email" placeholder="you@company.com" />
            </label>

            <label>
              Password
              <input type="password" placeholder="Choose a password" />
            </label>

            <Button variant="primary">Create account</Button>
          </form>

          <p className="auth-footer">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
