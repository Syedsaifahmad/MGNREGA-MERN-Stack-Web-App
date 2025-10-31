import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About MGNREGA Tracker</h1>
        <p>
          Empowering transparency and accountability through real-time
          monitoring of MGNREGA data across Indian districts.
        </p>
      </header>

      <section className="about-content">
        <div className="about-section">
          <h2>🌱 Our Mission</h2>
          <p>
            MGNREGA Tracker is designed to help citizens and administrators
            easily monitor work progress, fund allocation, and job creation
            under the Mahatma Gandhi National Rural Employment Guarantee Act.
          </p>
        </div>

        <div className="about-section">
          <h2>📊 What We Do</h2>
          <p>
            We collect and visualize district-level data to highlight trends,
            performance metrics, and fund usage. Our goal is to make rural
            development data accessible and insightful for everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>🤝 Why It Matters</h2>
          <p>
            By offering a transparent look into MGNREGA operations, we aim to
            strengthen accountability and help ensure that every rupee spent
            truly impacts rural livelihoods.
          </p>
        </div>
      </section>

      <footer className="about-footer">
        <h3>Have Questions?</h3>
        <p>
          Reach out to us at{" "}
          <a href="mailto:support@mgnregatracker.in">
            support@mgnregatracker.in
          </a>
        </p>
      </footer>
    </div>
  );
};

export default About;
