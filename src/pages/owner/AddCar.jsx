import { useState } from "react";
import Title from "../../components/owner/Title";

const AddCar = () => {

  const [image, setImage] = useState(null);

  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: "",
    location: "",
    description: ""
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(car);
    console.log(image);
  };

  return (
    <div className="cars-page">
      <div className="container">

        <Title
          title="Add New Car"
          subtitle="Fill in details to list a new car"
        />

        <form onSubmit={handleSubmit} className="addcar-form">

          {/* IMAGE */}
          <div className="form-group">
            <label>Upload car image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="input-field"
            />
          </div>

          {/* BRAND + MODEL */}
          <div className="form-row">
            <div className="form-group">
              <label>Brand</label>
              <input
                type="text"
                name="brand"
                value={car.brand}
                onChange={handleChange}
                placeholder="BMW, Audi..."
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Model</label>
              <input
                type="text"
                name="model"
                value={car.model}
                onChange={handleChange}
                placeholder="X5, M4..."
                className="input-field"
              />
            </div>
          </div>

          {/* YEAR + PRICE + CATEGORY */}
          <div className="form-row">
            <div className="form-group">
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={car.year}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Daily Price</label>
              <input
                type="number"
                name="pricePerDay"
                value={car.pricePerDay}
                onChange={handleChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={car.category}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select Category</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Van">Van</option>
              </select>
            </div>
          </div>

          {/* TRANSMISSION + FUEL + SEATS */}
          <div className="form-row">
            <div className="form-group">
              <label>Transmission</label>
              <select
                name="transmission"
                value={car.transmission}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>

            <div className="form-group">
              <label>Fuel Type</label>
              <select
                name="fuel_type"
                value={car.fuel_type}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
              </select>
            </div>

            <div className="form-group">
              <label>Seating Capacity</label>
              <input
                type="number"
                name="seating_capacity"
                value={car.seating_capacity}
                onChange={handleChange}
                className="input-field"
              />
            </div>
          </div>

          {/* LOCATION */}
          <div className="form-group">
            <label>Location</label>
            <select
              name="location"
              value={car.location}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Select Location</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={car.description}
              onChange={handleChange}
              rows="4"
              className="input-field"
            ></textarea>
          </div>

          {/* BUTTON */}
          <button type="submit" className="gold-btn">
            List Your Car
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddCar;