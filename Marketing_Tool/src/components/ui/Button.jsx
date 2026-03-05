import { Link } from "react-router-dom";

const Button = ({ children, variant = "primary", to }) => {
  const isExternal = typeof to === "string" && /^(https?:)?\/\//i.test(to);

  if (to) {
    if (isExternal) {
      return (
        <a href={to} className={`btn ${variant}`}>
          {children}
        </a>
      );
    }

    return (
      <Link to={to} className={`btn ${variant}`}>
        {children}
      </Link>
    );
  }

  return <button className={`btn ${variant}`}>{children}</button>;
};

export default Button;
