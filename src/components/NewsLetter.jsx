import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email); // later send to backend
  };

  return (
    <section className="newsletter-section">
      <div className="text-center">

        <p className="section-subtitle">NEWSLETTER</p>
        <h2>Never Miss a Deal</h2>
        <p className="newsletter-text">
          Subscribe to get the latest offers, updates and luxury deals.
        </p>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;