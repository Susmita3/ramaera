import { Link, NavLink } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { SlArrowDown } from "react-icons/sl";

const Nav = () => {
  return (
    <>
      <nav className="fixed top-0 w-full px-10 py-6 flex items-center flex-row justify-between">
        {/* Logo parts start */}
        <div className="w-1/12">
          <Link to="/">
            <img
              src={require("../Assets/logo.png")}
              alt="logo"
              className="w-24"
            />
          </Link>
        </div>

        {/* Menu part start */}
        <div className="flex flex-row items-center justify-between border rounded-2xl w-10/12 h-16 p-2 font-Montserrat backdrop-blur">
          <ul className="flex items-center justify-around w-6/12 text-lg">
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center gap-2 hover:text-[#E65C00]"
              >
                HOME <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center gap-2 hover:text-[#E65C00]"
              >
                OUR INDUSTRIES <SlArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="text-white flex items-center gap-2 hover:text-[#E65C00]"
              >
                OUR COMPANIES <SlArrowDown />
              </NavLink>
            </li>
          </ul>

          <ul className="flex items-center flex-row justify-around w-3/12 text-lg hover:text-[#E65C00]">
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

        {/* Hamburger menu start
        <nav className="" onClick="onClickMenu()">
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </nav>

        <ul className="bg-blue-500">
          <li>
            <NavLink
              to="/"
              className="text-white flex items-center gap-2 hover:text-[#E65C00]"
            >
              HOME <SlArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-white flex items-center gap-2 hover:text-[#E65C00]"
            >
              OUR INDUSTRIES <SlArrowDown />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="text-white flex items-center gap-2 hover:text-[#E65C00]"
            >
              OUR COMPANIES <SlArrowDown />
            </NavLink>
            </li>
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
        </ul> */}
      </nav>
    </>
  );
};

export default Nav;
