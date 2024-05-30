import React from "react";
import MapImage from "../../../../../public/images/image 1.png";
import { FaUser } from "react-icons/fa";

const Map = () => {
  return (
    <div className="mb-24 w-full items-center justify-center mx-auto">
      <img className="w-full mx-auto" src={MapImage} alt="" />
      <div className="flex justify-center mt-10 items-center space-x-5 mx-auto w-full">
        <FaUser size={50} />
        <p className="text-xl font-semibold">Anda di sini</p>
      </div>
    </div>
  );
};

export default Map;
