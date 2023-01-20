import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Anchor = ({ title, icon, setNav, link }) => {
  return (
    <a
      href={link}
      onClick={setNav}
      className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
    >
      {icon}
      <span className="pl-4 fle">{title}</span>
    </a>
  );
};

export default Anchor;
