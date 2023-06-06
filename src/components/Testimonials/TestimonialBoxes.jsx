import React from "react";
import TestimonialBox from "./TestimonialBox";
import TestimonialImg1 from "../../images/testimonials/testimonial-1.jpg";
import TestimonialImg2 from "../../images/testimonials/testimonial-2.jpg";


function TestimonialBoxes() {
  return (
    <>
      {/* <TestimonialBox
        img={TestimonialImg1}
        text=" “Subscribing to EkhartYoga has been the best choice for my mental, spiritual and physical health. I have established a home practice I look forward to each day.”"
        name="Melissa Gates"
        joining="April 9th 2017"
      /> */}
      <TestimonialBox
        img={TestimonialImg2}
        text=" “This is what I really like about YogaWise, different teachers, with various passions and expertise bringing us such a healthy diet of complimentary yoga styles. Feeling ready to tackle the day!”"
        name="Karan Crandell"
        joining="July 6th 2016"
      />
    </>
  );
}

export default TestimonialBoxes;
