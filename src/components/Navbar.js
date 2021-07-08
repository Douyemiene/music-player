import React, { useState } from "react";
import Logo from "../Images/DupLogo.png";
import { FiSearch, FiUser, FiMenu } from "react-icons/fi";
import FeatherIcon from "feather-icons-react";
import { GoPrimitiveDot } from "react-icons/go";
const Navbar = () => {
  const [show, setshow] = useState(false);
  const showDropdown = () => {
    setshow((show) => !show);
  };
  return (
    <div className="flex h-12 md:h-20 py-2 px-0.5 md:px-4 justify-between border-b border-gray-300 items-center mb-2 md:mb-4">
      <div className="flex">
        <div className="flex mr-2 md:mr-24 items-center">
          <img
            src={Logo}
            alt="Company Logo"
            className="h-12 mr-4 hidden  md:block"
          />
          <FiMenu className="md:hidden mr-4" />
          <div className="uppercase text-blue-600 md:text-2xl text-sm mr-4 md:mr-0">
            <span className="font-bold mt-6">Dubplate.</span>Trade
          </div>
        </div>

        <div class="relative md:mr-6 self-center">
          <input
            type="search"
            class="bg-gray-100 shadow h-8 border-0 p-3 pr-3 md:pl-10 w-10 pl-7  md:w-72 rounded-full md:rounded-lg placeholder-text-gray-600 text-sm"
            placeholder="Search for any artist, genre or song title"
            style={{
              fontSize: "12px",
            }}
          />
          <div class="absolute -top-1.5 left-2 mt-3 mr-4 -lighter text-gray-500">
            <FiSearch />
          </div>
        </div>
      </div>

      <div className="relative flex self-center justify-self-end items-center text-xs md:text-base">
        <GoPrimitiveDot className="mr-2 text-gray-600 " />
        <div className="mr-2 text-gray-600 ">Account</div>
        <div className="rounded-full text-blue-600 bg-blue-200 px-2 py-2">
          <FiUser />
        </div>
        <FeatherIcon
          icon="chevron-down"
          size={15}
          className="text-gray-900"
          onClick={showDropdown}
        />
        {show && (
          <div className="absolute top-8 right-0 w-48 shadow-lg  rounded-md h-20 bg-white border border-gray-200 px-2">
            <div className="mt-3 text-left">Connect your wallet</div>
            <div className="bg-blue-600 rounded-sm py-1 text-white mt-1">
              Connect wallet
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
