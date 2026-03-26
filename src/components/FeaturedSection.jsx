import { use } from "react";
import { dummyCarData } from "../assets/assets";
import CarCards from "./CarCards";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {
    const navigate = useNavigate();
    return (
        <div className="container mt-5">
            
            <Title 
                title="Featured Cars" 
                subtitle="Check out our most popular vehicles" 
            />

            <div className="row mt-4 gy-4">
                {dummyCarData.map((car, index) => (
                    <CarCards key={index} car={car} />
                ))}
            </div>
 
            <div className="text-center mb-2">
                <button className="btn btn-primary" onClick={()=>navigate("/cars")}>
                    View All Cars
                </button>
            </div>

        </div>
    );
}

export default FeaturedSection;