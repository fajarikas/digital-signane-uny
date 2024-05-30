import React from "react";
import LogoUNY from "../../../public/images/logo-uny.png";

const Navbar = () => {
  function getDate() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return `${date} ${months[month]} ${year}`;
  }

  return (
    <div className="text-white bg-dark-blue py-3 fixed w-full right-0 left-0 top-0">
      <nav className="flex w-full mx-auto  justify-center items-center ">
        <div className="flex space-x-5 items-center">
          <img
            src={LogoUNY}
            className="w-1/12 border-r-2 pr-3"
            alt="Logo UNY"
          />
          <div className="font-serif ">
            <p className="font-semibold border-b-2">
              UNIVERSITAS <br /> NEGERI YOGYAKARTA
            </p>
            <p className="uppercase text-xs text-light-yellow mt-1">
              Digital Signane
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-white font-semibold">{getDate()}</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
