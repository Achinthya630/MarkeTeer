import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="blob"></div>

      <div className="container">
        <h1>
          AI-Powered Growth
          <br />
          For Modern Businesses
        </h1>

        <p>
          Automate marketing. Increase retention.
          Boost revenue with intelligent engagement.
        </p>

        <Button>Start Free Trial</Button>
      </div>
    </section>
  );
};

export default Hero;