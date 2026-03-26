import { useState } from "react";
import { cityList } from "../assets/assets";

const Hero = () => {
  const [pickuplocation, setPickuplocation] = useState("");

  return (
    <div className="hero">
      <div className="hero-content">
        
        <div className="hero-text">
          <h1>Find Your Perfect Car</h1>
        </div>

        <div className="row mt-4 justify-content-center ms-3 me-3" >
          <div className="col-lg-3 col-md-6 mb-2">
            <select
              className="form-select"
              value={pickuplocation}
              onChange={(e) => setPickuplocation(e.target.value)}
            >
              <option value="">Pickup Location</option>
              {cityList.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="text-white mt-2 text-center">{pickuplocation?pickuplocation:"Please select a location"}</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-2">
            <input type="date" className="form-control" />
            <p className="text-white mt-2 text-center">Pickup Date</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-2">
            <input type="date" className="form-control" />
            <p className="text-white mt-2 text-center">Return Date</p>
          </div>

          <div className="col-lg-3 col-md-6 mb-2">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;