import Footer from "../components/Footer/Footer";
import GirlMeditate from "../images/who-we-are/woman-meditating.png";
import MenMeditating from "../images/who-we-are/men-meditating.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import GirlRedRotatedBg from "../images/who-we-are/girl-redbg-rotated.svg";
import MeditateText from "../images/who-we-are/meditating.png";
import GirlWind from "../images/who-we-are/wind.png";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Img2 from "../images/AboutPage/2.jpg";
import Img3 from "../images/AboutPage/3.jpg";
import Target from "../images/AboutPage/target.png";
import History from "../images/AboutPage/history.png";

function About() {
  return (
    <>
      <section className="login-section">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            About Us
          </h1>
        </div>
        <div className="container page-padding py-[5rem]">
          <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
            {/* title div -- */}
            <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
              <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                who we are
              </p>
              <img
                src={TitleRed}
                alt="text_bg"
                className="w-[21rem] absolute top-[120px] min450:top-[108px] min375:top-[68px]"
              />

              <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                Your Movement & Mindfulness Bestie
              </h2>
              <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                Our instructors bring a wealth of expertise in various yoga
                styles, ensuring that you receive proper guidance and
                personalized attention throughout your practice. Build physical
                and mental toughness through fun.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-[#ff0336]`}
                goTo="/contact"
                text="contact us"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
              />
            </div>
            {/*  */}
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

                <img
                  src={GirlRedRotatedBg}
                  alt="bg-red"
                  className="!top-[58%] girl-bg "
                />
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
          {/*  */}
          <div className="mt-[20rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={History} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">History</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  history of yoga dates back thousands of years and has evolved
                  through different periods and cultures. The origins of yoga
                  can be traced to ancient India, where it developed as a
                  comprehensive system for physical, mental, and spiritual
                  well-being.
                </p>
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img2}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem]">
                <img
                  src={Img3}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/*  */}
              <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                <img src={Target} alt="target_img" className="w-[9rem]" />
                <h2 className="text-[36px] font-bold mt-3">Our manifesto</h2>
                <p className="text-[16px] font-medium text-[#646464] mt-5">
                  VISION – A world that comes together to heal. MISSION – To
                  connect people through self-care. OUR WHY – We connect people
                  through self-care so that, together, we can heal ourselves and
                  our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default About;
