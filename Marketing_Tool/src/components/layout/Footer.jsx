import Button from "../ui/Button";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="container">
        <div className="footer-top">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Margroms</h3>
            <p>
              AI-powered marketing automation to help modern
              businesses scale faster and smarter.
            </p>
          </div>

          {/* Product Links */}
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-column newsletter">
            <h4>Stay Updated</h4>
            <p>Get product updates and growth tips.</p>

            <div className="newsletter-input">
              <input
                type="email"
                placeholder="Enter your email"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Margorms. All rights reserved.</p>

          <div className="social-icons">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;