import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgWellBeing from "../../images/pricing/bg-well-being.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";
import Img4 from "../../images/pricing/img4.jpg";

const pricing = [
  {
    img: Img1,
    price: "39",
    plan: "Monthly subscription",
  },
  {
    img: Img2,
    price: "65",
    plan: "3 Month subscription",
  },
  {
    img: Img3,
    price: "100",
    plan: "6 Month subscription",
  },
  {
    img: Img4,
    price: "160",
    plan: "Annual subscription",
  },
];

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[12rem] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              PRICING CHART
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Stay flexible with a monthly membership or save with an annual
              membership.
              <br /> Both plans give you access to thousands of yoga and
              meditation classes to suit your schedule.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            {pricing.map((plan, index) => (
              <PricingBox
                plan={plan.plan}
                img={plan.img}
                price={plan.price}
                key={index}
              />
            ))}
          </div>
          <img
            src={BgWellBeing}
            alt="bg_icon"
            className="right-0 bottom-0 absolute z-[1] width-[15%]"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
