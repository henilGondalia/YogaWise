import React from "react";
import Maditation from "../images/features/meditate-red.png";

export default function Loader() {
  return (
    <div className="loader">
      <img src={Maditation} alt="Loading..." />
      <div>Embrace the stillness and find patience within.</div>
    </div>
  );
}
