import { useState, useEffect } from "react";
import { dummyBookingData } from "../assets/assets";
import Title from "../components/Title";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    setBookings(dummyBookingData);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="cars-page">
      <div className="container">

        {/* Title */}
        <Title
          subtitle="YOUR BOOKINGS"
          title="My Bookings"
        />

        <div className="cars-grid">

          {bookings.map((booking) => (
            <div key={booking.id} className="car-card">

              {/* IMAGE */}
              <img src={booking.car.image} alt={booking.car.model} />

              <div className="car-info">

                {/* LEFT */}
                <div>
                  <h5 className="car-title">
                    {booking.car.brand} {booking.car.model}
                  </h5>

                  <small>
                    📅 {booking.pickupDate} → {booking.returnDate}
                  </small>

                  <small>
                    📍 {booking.car.location}
                  </small>

                  <small>
                    Status:{" "}
                    <span
                      style={{
                        color:
                          booking.status === "Confirmed"
                            ? "#00ffa2"
                            : booking.status === "Pending"
                            ? "#ffc107"
                            : "#ff4d4d",
                        fontWeight: "500"
                      }}
                    >
                      {booking.status}
                    </span>
                  </small>
                </div>

                {/* RIGHT */}
                <div className="right">
                  <span className="price">
                    ₹ {booking.totalPrice}
                  </span>

                  <button>
                    View Details
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default MyBookings;