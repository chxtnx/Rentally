import CarCards from "../components/CarCards";
import { dummyCarData } from "../assets/assets";
import Title from "../components/Title";



const Cars = () => {
  return (
    <div className="cars-page">
      <div className="container">
        <Title
  subtitle="AVAILABLE CARS"
  title="Luxury Car Fleet"
/>

        <div className="cars-grid">
          {dummyCarData.map((car) => (
            <CarCards key={car.id} car={car} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Cars;