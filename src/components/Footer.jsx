import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-full h-68 bg-white flex flex-col items-center justify-around">
      <h2 className="text-4xl text-bold  font-serif text-[#001b5e] my-6">
        CHANO.
      </h2>
      <div className="flex max-w-[200px] w-full justify-between my-6  ">
        <a href="https://www.facebook.com/irakli.chanuyvadze.5" target="_blank">
          <FaFacebookF
            size={20}
            className="hover:scale-125 ease-in duration-200 cursor-pointer"
          />
        </a>
        <a href="https://www.instagram.com/irakli_chanuyvadze/" target="_blank">
          <FaInstagram
            size={20}
            className="hover:scale-125 ease-in duration-200 cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/iraklichano/" target="_blank">
          <FaLinkedinIn
            size={20}
            className="hover:scale-125 ease-in duration-200 cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/iraklichano/" target="_blank">
          <FaGithub
            size={20}
            className=" hover:scale-125 ease-in duration-200 cursor-pointer"
          />
        </a>
      </div>
      <h3 className="text-xl text-bold  font-serif text-[#001b5e] my-6">
        © CHANO. All rights reserved
      </h3>
    </div>
  );
};

export default Nav;
