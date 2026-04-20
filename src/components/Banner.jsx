import React, { useState } from "react";
import { cityList } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    city: "",
    pickupDate: "",
    returnDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/cars", { state: formData });
  };

  return (
    <section className="banner-section">
      <div className="overlay"></div>

      <div className="banner-content">
        <p className="rent-text">RENT NOW</p>
        <h2>Book Auto Rental</h2>

        <form className="booking-bar" onSubmit={handleSubmit}>
          
          {/* LOCATION */}
          <div className="booking-field">
            <small>Pick Up Location</small>
            <select name="city" onChange={handleChange}>
              <option value="">Select City</option>
              {cityList.map((city, i) => (
                <option key={i} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* PICKUP DATE */}
          <div className="booking-field">
            <small>Pick Up Date</small>
            <input
              type="date"
              name="pickupDate"
              onChange={handleChange}
            />
          </div>

          {/* RETURN DATE */}
          <div className="booking-field">
            <small>Return Date</small>
            <input
              type="date"
              name="returnDate"
              onChange={handleChange}
            />
          </div>

          {/* BUTTON */}
          <button type="submit">Rent Now</button>

        </form>
      </div>
    </section>
  );
};

export default Banner;