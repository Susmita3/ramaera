import { Link, NavLink } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { SlArrowDown } from "react-icons/sl";
import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 w-full px-10 py-6 flex items-center flex-row justify-between">
        {/* Logo parts start */}
        <div className="w-2/12">
          <Link to="/">
            <img
              src={require("../Assets/logo.png")}
              alt="logo"
              className="w-24"
            />
          </Link>
        </div>

        {/* Menu part start */}
        <div className="hidden md:hidden lg:flex flex-row justify-between border rounded-2xl w-11/12 h-20 p-2 font-Montserrat backdrop-blur ">
          <ul className="flex items-center justify-around w-6/12 text-sm xl:text-lg space-x-2">
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center gap-1 hover:text-[#E65C00]"
              >
                HOME <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center gap-1 hover:text-[#E65C00]"
              >
                OUR INDUSTRIES <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center gap-1 hover:text-[#E65C00]"
              >
                OUR COMPANIES <SlArrowDown />
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center flex-row justify-around w-3/12 text-sm xl:text-lg space-x-2 hover:text-[#E65C00]">
            <li>
              <NavLink
                to="/"
                className="text-white text-lg hover:text-[#E65C00]"
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white text-lg hover:text-[#E65C00]"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white text-lg hover:text-[#E65C00]"
              >
                <ImSearch />
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger menu start */}
        <div className="lg:hidden relative z-10">
          <button
            className={
              "flex items-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`w-8 h-8 ${
                isOpen ? "rotate-45" : ""
              } transition duration-150 ease-in-out `}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 z-20 mt-2 py-2 backdrop-blur border rounded-md shadow-xl font-Montserrat font-semibold w-80 text-center text-xl">
              <a
                href="/"
                className="block px-4 py-2 text-md text-white hover:bg-gray-100 hover:text-[#E65C00] "
              >
                HOME
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-md text-white hover:bg-gray-100 hover:text-[#E65C00]"
              >
                OUR INDUSTRIES
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-md text-white hover:bg-gray-100 hover:text-[#E65C00]"
              >
                OUR COMPANIES
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-md text-white hover:bg-gray-100 hover:text-[#E65C00]"
              >
                Career
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-md text-white hover:bg-gray-100 hover:text-[#E65C00]"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
