import Quotes from "../../images/testimonials/quotes.png";
import BoxShape from "../../images/testimonials/testimonial-shape.png";

function TestimonialBox({ img, text, name, joining }) {
  return (
    <>
      <img
        alt="girl_img"
        src={img}
        className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] md1000:hidden"
      />
      <div className="absolute flex flex-col bg-black  top-0 right-0 w-[60%] md1000:w-full h-full py-[47px] px-[50px] min540:py-[24px] min540:px-[30px] min540:h-[40rem] min375:h-[50rem]">
        <img alt="quote_img" src={Quotes} className="w-[6rem]" />
        <p className=" text-[16px] italic text-[#dedede] my-6 z-10">{text}</p>
        <h3 className="text-white text-[21px] mb-1 font-bold">{name}</h3>
        <p className="text-[14px] font-medium text-[#dedede]">Member Since</p>
        <p className="text-[14px] font-medium text-[#dedede]">{joining}</p>
        <img
          alt="box_img"
          src={BoxShape}
          className="w-[17.5rem] absolute bottom-0 right-[13.5rem] invert opacity-40"
        />
      </div>
    </>
  );
}

export default TestimonialBox;
