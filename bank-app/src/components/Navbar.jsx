import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="w-full flex py-4 justify-between 
    items-center navbar"
    >
      <img src={logo} alt="logo" className="w-[100px] h-[26px]" />
      <ul
        className="list-none sm:flex hidden 
      justify-end items-center flex-1 "
      >
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer 
            text-[14px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="hamburger menu"
          className="w-[18px] h-[26px] object-contain"
          onClick={() => setToggle((previous) => !previous)}
        />
        <div
          className={`${toggle ? "flex" : "hidden"} p-4 bg-black-gradient 
        absolute top-20 right-0 mx-4 my-2 min-w-[120px] rounded-xl sidebar`}
        >
          <ul
            className="list-none flex
            flex-col
              justify-end items-center flex-1 "
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer 
              text-[14px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
