import React from "react";

export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 ">
      <div className=" flex justify-between items-stretch bg-gray-50 shadow-xl mx-auto p-4 pb-8">
        <div className="flex flex-1 items-stretch select-none">
          <div className="w-16 h-16 bg-gray-400">
            <img className="w-16 h-16 border shadow" />
          </div>
          <div className="flex flex-1 flex-col ml-4 h-full">
            <p className="text-base font-bold flex space-x-2 items-center">
              <span className="mr-2"></span>
            </p>
            <p className="text-xs opacity-75"></p>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <audio
            className="react-audio-player hidden"
            controls=""
            id=""
            preload="metadata"
          >
            <p>
              Your browser does not support the <code>audio</code> element.
            </p>
          </audio>{" "}
          <div className="w-full h-1 rounded-full flex-shrink-0 bg-gray-200 border mb-4 relative">
            <span
              className="absolute transition-all ease-in-out left-0 top-0 h-full bg-blue-500 rounded-full"
              style={{ width: "0" }}
            ></span>
            <span
              className="absolute transition-all ease-in-out top-0 w-4 h-4 bg-white border-2 border-blue-500 rounded-full transform -translate-x-2 -translate-y-2 shadow"
              style={{ left: "0" }}
            ></span>
          </div>
          <div
            id="controls"
            className="flex flex-1 justify-center items-center"
          >
            <button className="appearance-none  rounded-full border border-transparent text-opacity-50 hover:text-blue-500 inline-flex items-center  justify-center w-10 h-10">
              &nbsp;
            </button>
            <button className="border-blue-500 appearance-none focus:outline-none rounded-full border inline-flex items-center justify-center mx-12 w-12 h-12">
              <span id="play-pause" className="paused"></span>
            </button>
            <button className="appearance-none focus:outline-none  rounded-full border border-transparent text-opacity-50 hover:text-blue-500 inline-flex items-center  justify-center w-10 h-10">
              &nbsp;
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </footer>
  );
}
