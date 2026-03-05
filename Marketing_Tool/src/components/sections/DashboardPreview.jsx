import dashboardImg from "../../assets/images/Dashboard_Preview.png";

const DashboardPreview = () => {
  return (
    <section className="dashboard">
      <div className="container">
        <h2>AI Powered Dashboard</h2>

        <div className="dashboard-card">
          <img
            className="dashboard-image"
            src={dashboardImg}
            alt="Dashboard preview"
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
