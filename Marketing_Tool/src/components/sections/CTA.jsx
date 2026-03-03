import Button from "../ui/Button";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-glow"></div>

      <div className="container">
        <div className="cta-card">
          <h2>
            Ready to Transform Your
            <span> Customer Engagement?</span>
          </h2>

          <p>
            Join thousands of businesses using AI-powered automation
            to increase retention and revenue.
          </p>

          <div className="cta-buttons">
            <Button>Start Free Trial</Button>
            <button className="btn secondary-btn">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;