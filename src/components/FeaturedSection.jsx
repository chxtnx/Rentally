import { useRef } from "react";
import { dummyCarData } from "../assets/assets";
import CarCards from "./CarCards";
import Title from "./Title";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedSection = () => {
  const sliderRef = useRef();

  const scroll = (dir) => {
    const slider = sliderRef.current;
    const card = slider.children[0];

    const style = window.getComputedStyle(slider);
    const gap = parseInt(style.gap) || 0;

    const cardWidth = card.offsetWidth + gap;

    slider.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="fleet-section">

      <Title
  subtitle="EXCLUSIVE COLLECTION"
title="Top Luxury Picks"
/>

      <div className="slider-container">

        {/* LEFT ARROW */}
        <button className="arrow left" onClick={() => scroll("left")}>
          <FiChevronLeft />
        </button>

        {/* SLIDER */}
        <div className="slider" ref={sliderRef}>
          {dummyCarData.slice(0, 5).map((car) => (
             <CarCards key={car.id} car={car} />
              ))}
        </div>

        {/* RIGHT ARROW */}
        <button className="arrow right" onClick={() => scroll("right")}>
          <FiChevronRight />
        </button>

      </div>
    </div>
  );
};

export default FeaturedSection;