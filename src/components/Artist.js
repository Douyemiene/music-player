import React from "react";

export default function Artist({ num, name, price }) {
  return (
    <div className="border-gray-200 border shadow-sm flex justify-between py-2 px-4 rounded-md text-sm mb-4 lg:mb-0">
      <div className="flex" style={{ fontSize: "0.75rem" }}>
        <div className="pr-3">{num}</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-blue-600">{price} $DUB</div>
        </div>
      </div>
      <div className="rounded-full bg-gradient-to-br from-blue-500 via-blue-500 to-white w-14 h-14"></div>
    </div>
  );
}
