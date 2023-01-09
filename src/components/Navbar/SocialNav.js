import React from "react";
import { RiTwitterFill, RiInstagramFill, RiFacebookFill } from "react-icons/ri";

const SocialNav = () => {
  return (
    <nav className="text-white flex flex-col space-y-16 fixed">
      
      <a href="https://twitter.com/home">
        <RiTwitterFill className="text-4xl hover:text-blue-400" />
        </a>

      <a href="https://instagram.com/">
        <RiInstagramFill className="text-4xl hover:text-pink-400" />
      </a>

      <a href="https://facebook.com/">
        <RiFacebookFill className="text-4xl hover:text-blue-500" />
      </a>
    </nav>
  );
};

export default SocialNav;
