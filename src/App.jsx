import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();

  // Check if path starts with /owner
  const isOwnerPath = location.pathname.startsWith("/owner");

  return (
    <div>
      {/* Show Navbar only if NOT owner route */}
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-detail/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </div>
  );
};

export default App;
