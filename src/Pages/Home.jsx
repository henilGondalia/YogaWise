import About from "../components/About/About";
import BmiCalc from "../components/BMI/BmiCalc";
import Blog from "../components/Blog/Blog";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import Featured from "../components/Featured/Featured";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Pricing from "../components/Pricing/PricingNav";
import Testimonials from "../components/Testimonials/Testimonials";
import Trainers from "../components/Trainers/Trainers";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featured />
      <ChooseUs />
      <Trainers />
      <Testimonials />
      <BmiCalc />
      <Pricing />
      <Blog />
      <CtaBanner />
      <Footer />
    </>
  );
}

export default Home;
