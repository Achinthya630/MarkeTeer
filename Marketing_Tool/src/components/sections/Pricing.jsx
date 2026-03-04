import Button from "../ui/Button";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Simple Pricing</h2>

        <div className="pricing-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <p className="price">₹499/month</p>
            <ul className="pricing-features">
              <li>Basic Automation</li>
              <li>Email Support</li>
              <li>Analytics</li>
            </ul>
            <Button>Choose Plan</Button>
          </div>

          <div className="price-card featured">
            <h3>Growth</h3>
            <p className="price">₹1,299/month</p>
            <ul className="pricing-features">
              <li>Advanced Automation</li>
              <li>Priority Support</li>
              <li>Deep Analytics</li>
            </ul>
            <Button className = "pricing-button">Choose Plan</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
