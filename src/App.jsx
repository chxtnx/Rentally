import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageBookings from "./pages/owner/ManageBookings";
import ManageCars from "./pages/owner/ManageCars";
import Auth from "./pages/Auth"
const App = () => {

  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-detail/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/owner/dashboard" element={<Dashboard />} />
        <Route path="/owner/addcar" element={<AddCar />} />
        <Route path="/owner/managebookings" element={<ManageBookings />} />
        <Route path="/owner/managecars" element={<ManageCars />} />
        <Route path="/auth" element={<Auth />} />

      </Routes>
      {!isOwnerPath && <Footer />}
      
    </div>
  );
};

export default App;
