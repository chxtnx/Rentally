import { useState, useEffect } from "react";
import { dummyUserData, dummyDashboardData } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import Title from "../../components/Title";

const Dashboard = () => {
  const user = dummyUserData;

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  });

  const dashboardCards = [
    { title: "Total Cars", value: data.totalCars },
    { title: "Total Bookings", value: data.totalBookings },
    { title: "Pending Bookings", value: data.pendingBookings },
    { title: "Completed Bookings", value: data.completedBookings },
  ];

  useEffect(() => {
    setData(dummyDashboardData);
  }, []);

  return (
    <div className="cars-page">
      <div className="container">

        {/* HEADER */}
        <div className="dashboard-topbar">

          {/* LEFT */}
          <NavLink className="navbar-brand fw-bold fs-3" to="/">
          <span className="logo-r">R</span>
         <span className="logo-rest">entally</span>
         </NavLink>

          {/* RIGHT */}
          <div className="dashboard-user">
            <img src={user.profileImage} alt="user" />
            <div>
              <h6>{user.name}</h6>
              <small>{user.role}</small>
            </div>
          </div>
        </div>

        {/* TITLE OUTSIDE GRID */}
<Title 
  title="Admin Dashboard" 
  subtitle="Manage your fleet and bookings" 
/>

{/* STATS GRID */}
<div className="dashboard-grid">
  {dashboardCards.map((card, index) => (
    <div key={index} className="dashboard-card">
      <h5>{card.title}</h5>
      <p className="dashboard-value">{card.value}</p>
    </div>
  ))}
</div>

        {/* ACTION CARDS */}
        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h5>Add New Car</h5>
            <p>Add a new car to your fleet</p>
            <NavLink to="/owner/addcar">
              <button>Add Car</button>
            </NavLink>
          </div>

          <div className="dashboard-card">
            <h5>Manage Cars</h5>
            <p>View and manage your cars</p>
            <NavLink to="/owner/managecars">
              <button>Manage</button>
            </NavLink>
          </div>

          <div className="dashboard-card">
            <h5>Bookings</h5>
            <p>Check all customer bookings</p>
            <NavLink to="/owner/managebookings">
              <button>View</button>
            </NavLink>
          </div>

        </div>
        <div className="mt-5">

  <h5 style={{ color: "white", fontWeight: "600", marginBottom: "20px" }}>
  Recent Bookings
</h5>

  <div className="table-responsive">
    <table className="table table-dark table-borderless align-middle">

      <thead>
        <tr>
          <th>Car</th>
          <th>Category</th>
          <th>Date</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.recentBookings.map((booking, index) => (
          <tr key={index}>
            <td>{booking.car.brand}</td>
            <td>{booking.car.category}</td>
            <td>{booking.createdAt.slice(0, 10)}</td>
            <td>₹ {booking.totalPrice}</td>
            <td>
              <span
                style={{
                  color:
                    booking.status === "Confirmed"
                      ? "#00ffa2"
                      : booking.status === "Pending"
                      ? "#ffc107"
                      : "#ff4d4d",
                }}
              >
                {booking.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>

</div>

      </div>
    </div>
  );
};

export default Dashboard;