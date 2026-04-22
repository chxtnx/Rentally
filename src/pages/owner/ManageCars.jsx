import { useEffect, useState } from "react";
import Title from "../../components/owner/Title";
import { dummyCarData } from "../../assets/assets";
import { MdDelete } from "react-icons/md";

const ManageCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(dummyCarData);
  }, []);

  const handleDelete = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

return (
  <div className="manage-page text-white min-vh-100 py-5">
    
    <div className="container ">
      <Title
        title="Manage Cars"
        subtitle="View all listed cars, update their details, or remove them from the platform"
      />
    </div>

    <div className="container mt-4">
      <div className="table-responsive manage-table">
    <table className="table table-dark table-borderless align-middle">
            
            <thead>
              <tr>
                <th>Car</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {cars.map((car) => (
                <tr key={car.id}>
                  
                  {/* CAR */}
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={car.image}
                        alt=""
                        className="image-car-dashboard"
                      />
                      <span>{car.brand}</span>
                    </div>
                  </td>

                  {/* CATEGORY */}
                  <td>{car.category}</td>

                  {/* PRICE */}
                  <td className="fw-bold text-warning">
                    ₹ {car.price_per_day}
                  </td>

                  {/* STATUS */}
                  <td>
                    {car.isAvailable ? (
                      <span className="text-success">Available</span>
                    ) : (
                      <span className="text-danger">Unavailable</span>
                    )}
                  </td>

                  {/* DELETE */}
                  <td className="text-center">
                    <MdDelete
                      onClick={() => handleDelete(car.id)}
                      style={{ cursor: "pointer", color: "red" }}
                    />
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
      </div>
    </div>

  </div>
);
};

export default ManageCars;