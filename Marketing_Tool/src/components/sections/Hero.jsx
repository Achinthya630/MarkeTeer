import Button from "../ui/Button";
import { useEffect } from "react";
import axios from "axios";

const Hero = () => {

    useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/test/")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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