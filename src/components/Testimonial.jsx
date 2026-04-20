import { testimonialsData } from "../assets/assets";
import React from "react";

const Testimonial = () => {
  return (
    <section className="testimonials-section">
        <div className="container">
<div className="text-center mb-5">
  <p className="section-subtitle">TESTIMONIALS</p>
  <h2>What Clients Say</h2>
</div>
      <div className="row g-4">
        {testimonialsData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="testimonial-card">

              <div className="stars">
                {"★".repeat(item.rating)}
              </div>

              <div className="quote">“</div>

              <p>{item.text}</p>

              <div className="user">
                <img src={item.image} alt={item.name} />
                <div>
                  <h6>{item.name}</h6>
                  <small>{item.role}</small>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

        </div>

    </section>
  );
};

export default Testimonial;