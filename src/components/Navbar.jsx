import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import {useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
  className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 z-3 navbar-dark px-4"
  style={{
    background: "rgba(0,0,0,0.2)",
    backdropFilter: "blur(8px)",
  }}
>
  <div className="container-fluid">

     <NavLink className="navbar-brand fw-bold fs-3" to="/">
     <span className="logo-r">R</span>
     <span className="logo-rest">entally</span>
     </NavLink>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse">

      <div className="navbar-nav ms-auto gap-3">
        <NavLink className="nav-link text-white" to="/">Home</NavLink>
        <NavLink className="nav-link text-white" to="/cars">Cars</NavLink>
        <NavLink className="nav-link text-white" to="/my-bookings">Bookings</NavLink>
      </div>

      <div className="d-flex align-items-center ms-4 gap-3">

      <div className="search-wrapper d-flex align-items-center">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <CiSearch className="search-icon " />
        </div>

        <button
  className="dashboard-btn"
  onClick={() => navigate("/owner/dashboard")}
>
  Dashboard
</button>

        <button className="login-btn" onClick={()=>navigate("/auth")}>
          Login
        </button>

      </div>
      

       </div>
  </div>
</nav>
  );
};

export default Navbar;