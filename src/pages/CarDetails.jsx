import { useParams } from "react-router-dom";
import { dummyCarData } from "../assets/assets";

const CarDetails = () => {
  const { id } = useParams();
  const car = dummyCarData.find((c) => c.id === parseInt(id));

  if (!car) return <h2 style={{ color: "white" }}>Car not found</h2>;

  return (
    <>
      {/* HERO */}
      <section className="cd-hero">
  <div className="cd-hero-inner">

    {/* LEFT TEXT */}
    <div className="cd-hero-content">
      <p className="cd-tag">{car.category} Car</p>
      <h1>{car.brand} {car.model}</h1>
    </div>

    {/* RIGHT IMAGE */}
    <div className="cd-hero-image">
      <img src={car.image} alt={car.model} />
    </div>

  </div>
</section>

      {/* DETAILS */}
      <section className="cd-section">
        <div className="container">
          <div className="row">

            {/* LEFT */}
            <div className="col-md-7">
              <h3 className="cd-title">General Information</h3>

              <p className="cd-desc">{car.description}</p>

              <ul className="cd-features">
                <li>✔ 24/7 Roadside Assistance</li>
                <li>✔ Free Cancellation & Return</li>
                <li>✔ Rent Now Pay Later</li>
              </ul>
            </div>

            {/* RIGHT CARD */}
            <div className="col-md-5">
              <div className="cd-card">

                <div className="cd-price">
                  ₹{car.price_per_day} / day
                </div>

                <div className="cd-specs">
                  <p>🚪 Doors: {car.seating_capacity}</p>
                  <p>👥 Passengers: {car.seating_capacity}</p>
                  <p>⚙ Transmission: {car.transmission}</p>
                  <p>📍 Location: {car.location}</p>

                  <button className="cd-btn">
                    Rent Now
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetails;