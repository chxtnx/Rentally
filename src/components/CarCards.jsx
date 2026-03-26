import {FaIndianRupeeSign} from "react-icons/fa6";
import {IoMdPerson} from "react-icons/io";
import { useNavigate } from "react-router-dom";

const CarCards = ({ car }) => {
    const navigate = useNavigate();
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card car-card h-100">
                <div className="image-wrapper">
                    <img 
                        src={car.image} 
                        className="card-img-top" 
                        alt={car.model} 
                        onClick={()=>navigate(`/cars/${car.id}`)} style={{cursor:"pointer"}}
                    />
                </div>

                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                        {car.brand} {car.model}
                    </h5>

                    <div className="car-info mb-3">
                        <span className="badge bg-light text-dark me-2">
                            {car.year}
                        </span>
                        <span className="badge bg-success">
                            <FaIndianRupeeSign /> {car.price_per_day}/day
                        </span>
                    </div>
                    <div className="car-seats mb-3">
                        <IoMdPerson /> {car.seating_capacity} Seats
                    </div>

                    <button className="btn rent-btn mt-auto w-100 text-white" disabled={!car.isAvailable} onClick={()=>navigate(`/cars/${car.id}`)}>
                        {
                            car.isAvailable ? "Available Now" : "Not Available"
                            
                        }
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarCards;