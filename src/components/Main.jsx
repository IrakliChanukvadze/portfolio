import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Main = () => {
  const animation = (
    <TypeAnimation
      sequence={[
        "Front-end Developer",
        2000,
        "Coder",
        2000,
        "Tech Enthusiast",
        2000,
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "1em", paddingLeft: "0.5em" }}
    />
  );
  return (
    <div id="main">
      <img
        className="h-screen w-full object-cover "
        src={new URL(`../assets/back.webp`, import.meta.url).href}
      />

      <div className="absolute top-0 left-0 h-screen w-full bg-white/20">
        <div className="flex flex-col items-center justify-center h-full   max-w-[800px] w-full m-auto text-white">
          <h1 className="flex text-3xl xs:text-4xl sm:text-5xl font-bold font-serif">
            I'm Irakli &nbsp;
            <span className="hidden xs:block"> Tchanukvadze</span>
          </h1>
          <h2 className="flex text-base xxs:text-2xl sm:text-3xl pt-6">
            I'm a {animation}
          </h2>
          <div className="flex max-w-[200px] w-full justify-between pt-6 ">
            <a
              href="https://www.facebook.com/irakli.chanuyvadze.5"
              target="_blank"
            >
              <FaFacebookF
                size={20}
                className="hover:scale-125 ease-in duration-200 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/irakli_chanuyvadze/"
              target="_blank"
            >
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
        </div>
      </div>
    </div>
  );
};

export default Main;

//https://www.facebook.com/irakli.chanuyvadze.5/
//https://www.instagram.com/irakli_chanuyvadze/
