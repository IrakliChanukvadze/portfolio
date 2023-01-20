import React from "react";

const SkilItem = ({ title, lvl, icon }) => {
  console.log(icon);
  return (
    <div className="grid grid-cols-2 xs:grid-cols-3  gap-2 align-self-center">
      <div className="flex justify-end items-center pr-6 xs:pr-0 ">{icon}</div>
      <div className="  xs:col-span-2 xs:mr-0 ">
        <h3 className="text-bold text-lg">{title}</h3>
        <h3 className="text-gray-400 text-sm">{lvl}</h3>
      </div>
      <div></div>
    </div>
  );
};

export default SkilItem;
