const features = [
  {
    title: "Smart Automation",
    description: "AI workflows that engage customers at the right time.",
  },
  {
    title: "Deep Analytics",
    description: "Understand user behavior with real-time insights.",
  },
  {
    title: "Omnichannel Reach",
    description: "Email, SMS, WhatsApp and more — unified.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Everything You Need To Scale</h2>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;