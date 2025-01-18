import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container position-relative">
        {/* Catchy words */}
        <div className="text-center hero-text">
          <h1 className="display-4 text-gradient">Code Your Dreams</h1>
          <p className="lead text-light">
            Unlock your potential with <strong>Lyee</strong>.<br />
            Learn coding, build amazing projects, and showcase your skills!
          </p>
          <a href="/signup" className="btn btn-gradient">
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
