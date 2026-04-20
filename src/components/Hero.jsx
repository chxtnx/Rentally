import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (

    <div className="hero">
    <div className="hero-content text-center">

    <p className="premium-tag fade-up delay-1">•PREMIUM</p>

    <h1 className="fade-up delay-2">Find Your Drive</h1>

<p className="hero-quote fade-up delay-3">
  Premium cars. Seamless journeys.
</p>
    
    <button
  className="explore-btn mt-4 fade-up delay-4"
  onClick={() => navigate("/cars")}
>
  Explore →
</button>

  </div>

  <div className="scroll-indicator">
    <span></span>
  </div>
</div>
  );
};

export default Hero;