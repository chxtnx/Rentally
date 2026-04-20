import { useEffect, useState } from "react";
import { dummyBookingData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const normalized = dummyBookingData.map((b) => ({
      ...b,
      status: b.status.toLowerCase(),
    }));

    setBookings(normalized);
  }, []);

  return (
    <div className="manage-bookings-page">

      {/* Title */}
      <Title
        title="Manage Bookings"
        subtitle="Track all customer bookings, approve or cancel requests, and manage booking status"
      />

      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Car</th>
              <th>Date Range</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                
                {/* Car */}
                <td className="car-cell">
                  <img src={booking.car.image} alt="" />
                  <span>{booking.car.brand}</span>
                </td>

                {/* Date */}
                <td>
                  {booking.pickupDate} → {booking.returnDate}
                </td>

                {/* Price */}
                <td className="price">
                  ₹ {booking.totalPrice}
                </td>

                {/* Payment */}
                <td>
                  <span className="payment-badge">Offline</span>
                </td>

                {/* Status */}
                <td>
                  {booking.status === "pending" ? (
                    <select
                      className="status-select"
                      defaultValue={booking.status}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  ) : (
                    <span
                      className={
                        booking.status === "confirmed"
                          ? "status confirmed"
                          : "status cancelled"
                      }
                    >
                      {booking.status}
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManageBookings;