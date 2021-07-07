import React from "react";
import { FiFastForward, FiPause } from "react-icons/fi";
import { AiOutlineBackward } from "react-icons/ai";
import FeatherIcon from "feather-icons-react";
import { GiPauseButton } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0">
      <div className=" flex justify-between items-stretch bg-gray-50 shadow-xl mx-auto p-4 md:pb-8">
        <div className="flex flex-1 items-stretch select-none">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-400">
            <img className="w-10 h-10 md:w-16 md:h-16  border shadow" />
          </div>
          <div className="flex flex-1 flex-col ml-4 h-full">
            <p className="text-base">
              <FeatherIcon icon="heart" size={15} className="text-blue-500" />
            </p>
            <p className="text-xs opacity-75"></p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <input
            type="range"
            value={0}
            className="h-0.5 bg-gray-600 text-gray-300 md:mb-6 mb-2"
          />

          <div className="flex flex-1 justify-center items-center">
            <FeatherIcon icon="rewind" className="w-4" />
            <button className="border-blue-500 rounded-full border inline-flex items-center justify-center mx-12 w-8 h-8 md:w-12 md:h-12">
              <GiPauseButton className="text-blue-500" />
            </button>
            <FiFastForward />
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </footer>
  );
}
