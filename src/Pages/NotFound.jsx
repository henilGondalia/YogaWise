import React, { useState } from "react";
import Dark404Img from "../images/404Page/404-dark.png";

function NotFound() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div id="wrapper" className="bg-black pt-[20rem] min-h-[100vh]">
      <div className="relative container page-padding ">
        <div id="light-ray" className={`${isChecked ? "" : "hidden"}`}></div>
        {/* Switcher */}
        <div className="switcher absolute w-[185px] h-[84px] top-[-7rem] left-[2rem] z-[9999]">
          <input
            id="sw"
            type="checkbox"
            className="switcher-value hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="sw"
            className={`sw_btn absolute w-[42px] h-[45px] top-[2rem] left-[6.5rem] z-[7] transition-all duration-300 cursor-pointer ${
              isChecked ? "ml-[55px]" : ""
            }`}
          ></label>
          <div
            className={`sw_btn_bg h-full w-full absolute top-0 left-0 z-0`}
          ></div>
          <div className="text text-white absolute text-[14px] top-[2rem] left-[-4rem]">
            Turn{" "}
            <span className={`text-l ${isChecked ? "" : "hidden"}`}>off</span>
            <span className={`text-d ${isChecked ? "hidden" : ""}`}>on</span>
            <br />
            the light
          </div>
        </div>

        <div
          id="dark"
          className={`text-center pt-[2rem] ${isChecked ? "hidden" : ""}`}
        >
          <div className="info relative ">
            <img
              src={Dark404Img}
              alt="404 error"
              className="inline md1200:w-[80%]"
            />
          </div>
        </div>

        <div
          id="light"
          className={`text-center  pt-[2rem] ${isChecked ? "" : "hidden"}`}
        >
          <div className="info">
            <img
              src="//pkfrom.github.io/404/assets/img/404-light.gif"
              alt="404 error"
              className="inline w-[50%]"
            />
            <p className="text-[12px] pt-[10px]">
              The page you are looking for was moved, removed,
              <br />
              renamed or might never existed.
            </p>
            <a href="/" className="home-btn">
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
