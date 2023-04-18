import React from "react";
import techTalkerIcon from "../assets/icons/Content.png";

const Navbar = () => {
  return (
    <div className="navbar bg-fuchsia-200 p-2 rounded-2xl flex items-center justify-between font-semibold text-sm w-11/12">
      {/* <p className="p-0 m-0">TechTalker</p> */}
      <img src={techTalkerIcon} className="h-8" />
      <input
        type="text"
        placeholder="Search topic"
        className="search bg-blue-100/0 border-fuchsia-600 border-[1px] rounded-lg p-1 px-2 text-xs w-32 md:w-[350px]"
      ></input>
      <a
        href="#"
        className=" bg-fuchsia-700 text-white text-sm rounded-md p-1 contact"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Navbar;