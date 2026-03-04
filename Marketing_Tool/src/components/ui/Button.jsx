import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to }) => {
  if (to) {
    return (
      <Link to={to} className={`btn ${variant}`}>
        {children}
      </Link>
    );
  }

  return <button className={`btn ${variant}`}>{children}</button>;
};

export default Button;
