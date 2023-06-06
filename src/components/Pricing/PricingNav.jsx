import FigureImg from "../../images/pricing/bg-figure.png";
import MainButton from "../MainButton";

function Pricing() {
  return (
    <>
      <section id="pricing-nav" className="pricing-section relative w-full">
        <div className="container page-padding py-[10rem] relative w-[90%] min800:w-[40rem]">
          <div className="absolute top-[40%] max-w-[30%] md1000:max-w-[100%] md1000:top-[15%] md1000:w-[100%] md1000:text-center md1000:relative">
            <h2 className="text-[4rem] font-bold leading-tight mb-6 min800:w-[100%] ">
              Make yoga part of your life
            </h2>
            <p className="text-[16px] text-[#646464] font-medium ">
              Sharing the love of yoga to create positive change in the world.
            </p>
          </div>
          <img
            src={FigureImg}
            alt="figure_img"
            className="figure_img block mx-auto min800:hidden"
          />
          <div className="right-content absolute m-auto top-[32%] right-0 max-w-[25%] mt-[4rem] md1000:relative md1000:max-w-[40%] min800:max-w-[100%]">
            <MainButton
              color={`!text-white`}
              bg={`bg-[#3f3f3f]`}
              text="Try us for free"
              arrowColor={`!text-white`}
              cN="pricing-nav-cta"
              hover={`hover:bg-[#ff0336]`}
              goTo="/pricing"
            />
            <p className="text-[16px] text-[#646464] font-medium mt-5 md1000:text-center">
              Choose from monthly subscription or discounted quarterly, 6-month,
              or annual subscription plans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Pricing;
