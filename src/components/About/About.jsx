import AboutCarts from "./AboutCarts";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainersIcon from "../../images/who-we-are/instructor.png";
import ModernIcon from "../../images/who-we-are/yoga.png";
import CommunityIcon from "../../images/who-we-are/community.png";
import GirlMeditate from "../../images/who-we-are/woman-meditating.png";
import MenMeditating from "../../images/who-we-are/men-meditating.png";
import GirlRedBg from "../../images/who-we-are/girl-redbg.svg";
import GirlRedRotatedBg from "../../images/who-we-are/girl-redbg-rotated.svg";
import MeditateText from "../../images/who-we-are/meditating.png";
import GirlWind from "../../images/who-we-are/wind.png";
import MainButton from "../MainButton";

function About() {
  return (
    <>
      <section className="flex flex-col justify-between gap-2 about-section pb-[20rem]">
        <div className="container page-padding">
          {/* about cards */}
          <div className="about-cards flex gap-10 -mt-[8.5rem] md1000:flex-col">
            <AboutCarts />
          </div>

          {/* text-img div */}
          <div
            id="about"
            className=" grid grid-cols-[50fr,50fr] gap-[3rem] md1000:grid-cols-1"
          >
            {/* about text */}
            <div className="mt-[10.5rem] relative md1000:items-center md1000:flex md1000:flex-col md1000:text-center md1000:w-[full]">
              <p className="text-white font-semibold text-[15px] relative uppercase z-10 pl-16 md1000:pl-0 mb-12">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[31%] absolute -top-[6px] md1000:w-[22rem]"
              />
              <h2 className="text-[35px] font-bold leading-tight mb-6 w-[60rem] min800:w-[100%]">
                Your Movement & Mindfulness Bestie
              </h2>
              <p className="text-[16px] text-[#646464] font-medium ">
                Build physical and mental toughness through fun, engaging
                circuits that help you tackle your life on and off the mat.
              </p>
              {/* about text icons */}
              <div className="flex mt-12 mb-[7rem] gap-[2px] min620:flex-col ">
                <div className="flex flex-col  items-center text-center py-10 px-14 pl-7 min620:px-0">
                  <img
                    src={TrainersIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Experienced <br /> Instructors
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center border-solid border-l border-[rgb(0,0,0,0.2)] border-r py-10 px-14 min620:px-0 min620:border-none">
                  <img
                    src={ModernIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    modern <br /> approach
                  </h3>
                </div>

                <div className="flex flex-col items-center text-center py-10 px-14 pr-2 min620:px-0">
                  <img
                    src={CommunityIcon}
                    alt="icon_img"
                    className={`w-[5.4rem] mb-6 h-auto`}
                  />
                  <h3 className="uppercase font-bold text-[20px] leading-snug">
                    Community <br />
                    Connection
                  </h3>
                </div>
              </div>
              {/* cta button */}
              <MainButton
                color={`!text-white`}
                bg={`bg-[#3f3f3f]`}
                cN="about-cta"
                arrowColor={`!text-white`}
                hover={`hover:bg-[#FF0336]`}
                text="take a tour"
                goTo="/classes"
              />
            </div>
            {/* img side */}
            <div className="relative md1000:hidden">
              <img
                src={MenMeditating}
                alt="men_maditating"
                className="men-maditating hidden md1200:block"
              />
              <span className="md1200:hidden">
                <img
                  src={GirlMeditate}
                  alt="girl_maditating"
                  className="girl-maditating"
                />

                <img src={GirlRedRotatedBg} alt="bg-red" className="girl-bg" />
                <img src={GirlWind} alt="bg-wind" className="girl-wind" />
              </span>
              <img
                src={GirlRedBg}
                alt="bg-red"
                className="girl-bg girl-bg-90"
              />
              <img src={MeditateText} alt="bg-text" className="girl-text" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
