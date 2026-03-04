import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import Features from "../components/sections/Features";
import DashboardPreview from "../components/sections/DashboardPreview";
import Pricing from "../components/sections/Pricing";
import CTA from "../components/sections/CTA";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <Features />
      <DashboardPreview />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
