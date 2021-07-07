import React from "react";

export default function AsideItem({ Icon, name }) {
  return (
    <div className="flex items-center mb-4">
      <Icon className="mr-4" />
      <div>{name}</div>
    </div>
  );
}
