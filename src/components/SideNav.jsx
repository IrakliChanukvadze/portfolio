import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import Anchor from "./NavItem";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("white");

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const closeNav = () => {
    setNav((prev) => false);
  };
  const handleScroll = (event) => {
    if (window.scrollY > window.innerHeight) {
      setColor((prev) => {
        return "black";
      });
    } else {
      setColor("white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        size={20}
        className={`fixed top-4 right-4 md:hidden z-[100] text-${
          nav ? "black" : color
        }`}
      />
      {nav && (
        <div className="fixed w-full h-screen bg-white flex flex-col justify-center items-center md:hidden z-[30]">
          <Anchor
            title="Home"
            setNav={closeNav}
            link="#main"
            icon={<AiOutlineHome size={20} />}
          />
          <Anchor
            title="About Me"
            setNav={closeNav}
            link="#about"
            icon={<BsPerson size={20} />}
          />
          <Anchor
            title="Skills"
            setNav={closeNav}
            link="#skill"
            icon={<GiSkills size={20} />}
          />
          <Anchor
            title="Projects"
            setNav={closeNav}
            link="#projects"
            icon={<GrProjects size={20} />}
          />

          <Anchor
            title="Contact"
            setNav={closeNav}
            link="#contact"
            icon={<AiOutlineMail size={20} />}
          />
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className=" rounded-full p-4 m-2 shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#about"
            className=" rounded-full p-4 m-2 shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#skill"
            className=" rounded-full p-4 m-2 shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200"
          >
            <GiSkills size={20} />
          </a>
          <a
            href="#projects"
            className=" rounded-full p-4 m-2 shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
          </a>

          <a
            href="#contact"
            className=" rounded-full p-4 m-2 shadow-lg bg-gray-100 shadow-gray-400 hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
