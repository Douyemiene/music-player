import React from "react";
import Logo from "../Images/DupLogo.png";
import { FiSearch, FiUser } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
const Navbar = () => {
  return (
    <div className="flex h-20 py-2 px-4 justify-between border-b border-gray-300 items-center">
      <div className="flex">
        <div className="flex mr-24 items-center">
          <img src={Logo} alt="Company Logo" className="h-12 mr-4" />
          <div className="uppercase text-blue-600 text-2xl">
            <span className="font-bold mt-6">Dupllate.</span>Trade
          </div>
        </div>

        <div class="relative mr-6 self-center">
          <input
            type="search"
            class="bg-purple-white shadow h-8 border-0 p-3 pl-10 w-72 rounded-lg placeholder-text-gray-600 text-sm"
            placeholder="Search for any artist, genre or song title"
            style={{
              fontSize: "12px",
            }}
          />
          <div class="absolute -top-1.5 left-2 mt-3 mr-4 text-purple-lighter text-gray-500">
            <FiSearch size={25} />
          </div>
        </div>
      </div>

      <div className="flex self-center justify-self-end items-center">
        <GoPrimitiveDot className="mr-2 text-gray-600 " />
        <div className="mr-2 text-gray-600 ">Account</div>
        <div className="rounded-full text-blue-600 bg-blue-300 px-2 py-2">
          <FiUser />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
