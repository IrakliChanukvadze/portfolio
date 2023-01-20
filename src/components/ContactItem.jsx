import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ContactItem = ({ icon, adress, type, send }) => {
  return (
    <div className="flex flex-col items-center mt-8 border-2 p-6 rounded-lg bg-white">
      {icon}
      <h2 className="text-xl text-bold  font-serif mt-4 mb-2 text-[#001b5e]">
        {type}
      </h2>
      <h4 className="text-base text-black/80 mb-4 ">{adress}</h4>
      <a
        href={send}
        target="_blank"
        rel="noreferrer"
        className="flex hover:gap-1 ease-in duration-200"
      >
        Write me
        <AiOutlineArrowRight size={20} className="mt-1  " />
      </a>
    </div>
  );
};

export default ContactItem;
