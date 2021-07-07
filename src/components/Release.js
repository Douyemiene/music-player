import React from "react";

export default function Release({ image, title, artist, price }) {
  return (
    <div className="flex h-24 text-sm pt-3">
      <div className="bg-white p-3 shadow-md mr-4">
        {" "}
        <img src={image} className=" w-16 h-16" />
      </div>
      <div className="flex-grow text-left">
        <div>{title}</div>
        <div>{artist}</div>
        <div>
          Current price: <span className="text-blue-600">{price} $DUB</span>
        </div>
      </div>
      <button className="font-semibold self-start text-gray-500">BUY</button>
    </div>
  );
}
