import Banner from "../components/Banner";
import FeaturedSection from "../components/FeaturedSection";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/NewsLetter";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <Banner />
      <Testimonial/>
      <Newsletter />
    </div>
  );
};
export default Home;