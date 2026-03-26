import { NavLink } from "react-router-dom";
import { MdCarRental } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">

        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <MdCarRental /> Rentally
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Content */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          {/* Links */}
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/cars">Cars</NavLink>
            <NavLink className="nav-link" to="/my-bookings">My Bookings</NavLink>
          </div>

          {/* Search */}
          <div className="d-flex mx-1 mx-md-2">
            <input
              type="text"
              placeholder="Search Products"
              className="form-control"
            />
            <span className="text-white fs-4 ms-2">
              <CiSearch />
            </span>
          </div>

          {/* Dashboard Button */}
          <div className="d-flex my-1 mx-1">
            <button className="btn btn-dark">Dashboard</button>
          </div>

          {/* Login Button */}
          <div className="d-flex my-1 mx-1">
            <button className="btn btn-primary">Login</button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;