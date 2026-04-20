import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CarCards = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="car-card">

      <img src={car.image} alt={car.model} />
      <div className="car-info">

  <div>
    <h5>{car.brand} {car.model}</h5>

    <small>
      <IoMdPerson /> {car.seating_capacity} • {car.transmission} • {car.fuel_type} • {car.location}
    </small>

    {/* AVAILABILITY */}
    <small style={{ color: car.isAvailable ? "#00ffa2" : "#ff4d4d" }}>
      {car.isAvailable ? "Available" : "Booked"}
    </small>
  </div>

  <div className="right">
    <span className="price">
      <FaIndianRupeeSign /> {car.price_per_day}
    </span>

    <button
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/car-detail/${car.id}`);
      }}
    >
      Details
    </button>
  </div>

</div>
      
  

    </div>
  );
};

export default CarCards;