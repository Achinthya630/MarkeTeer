import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";
import Button from "../components/ui/Button";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/auth/register/", {
        username: email,
        email: email,
        password: password,
      });

      // if tokens returned, store and redirect
      if (res.data?.access) {
        localStorage.setItem("access_token", res.data.access);
        localStorage.setItem("refresh_token", res.data.refresh);
        window.location.href = "http://localhost:3039";
      } else {
        // otherwise redirect to login
        window.location.href = "/login";
      }
    } catch (err) {
      console.error(err);
      setError("Signup failed. Try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-page container">
        <div className="auth-card">
          <h2>Create an account</h2>
          <p className="muted">Start your free trial</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Full name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Jane Doe"
              />
            </label>

            <label>
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@company.com"
              />
            </label>

            <label>
              Password
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Choose a password"
              />
            </label>

            {error && (
              <div style={{ color: "red", marginBottom: 8 }}>{error}</div>
            )}

            <Button type="submit" variant="primary">
              Create account
            </Button>
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
