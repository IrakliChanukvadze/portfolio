import React from "react";
import selfie from "../assets/selfie.jpg";
import { GrCompliance } from "react-icons/gr";
import { RiSuitcaseLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import cv from "../assets/cv.pdf";

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto mt-16 w-[96%]  pt-4">
      <h2 className="text-4xl text-bold text-center font-serif pb-16 text-[#001b5e]">
        About me
      </h2>
      <div className="flex items-center lg:justify-around  flex-col lg:flex-row">
        <img src={selfie} className="max-w-[30%] min-w-[270px] h-auto w-full" />
        <div className="flex flex-col w-full lg:w-[50%] mt-9 lg:mt-0">
          <div className="flex gap-[3%] flex-col sm:flex-row justify-center items-center ">
            <div className="border-2 flex flex-col items-center py-6 rounded-lg bg-white w-[100%] sm:w-[30%] max-w-[270px] mb-7 sm:mb-0">
              <RiSuitcaseLine size={25} />
              <h3 className="text-2xl text-bold my-2 text-black">Experience</h3>
              <p className="text-base text-black/80 ">1+ years</p>
            </div>
            <div className="border-2 flex flex-col items-center py-6 rounded-lg bg-white w-[100%] sm:w-[30%] max-w-[270px] mb-7 sm:mb-0">
              <GrCompliance size={25} />
              <h3 className="text-2xl text-bold my-2 text-black">Completed</h3>
              <p className="text-base text-black/80 ">10+ Projects</p>
            </div>
            <div className="border-2 flex flex-col items-center py-6 rounded-lg bg-white w-[100%] sm:w-[30%] max-w-[270px] mb-7 sm:mb-0">
              <BiSupport size={25} />
              <h3 className="text-2xl text-bold my-2 text-black">Support</h3>
              <p className="text-base text-black/80 ">online 24/7</p>
            </div>
          </div>
          <p className="mb-10  max-w-[400px] sm:max-w-[400px] m-auto text-lg sm:mt-10">
            &nbsp; Hey, I am a highly motivated and driven individual with a
            strong passion for software development. With a Bachelor’s degree in
            Computer Science and a background as an international rugby referee,
            I have gained experience in problem-solving, teamwork, attention to
            detail, and working under pressure. As a rugby referee, I learned
            how to make quick, accurate decisions in high-pressure situations,
            and I bring that same level of focus and dedication to my work in
            software development. As a lead student back in my university days,
            I also developed a deep understanding of logic and algorithms. I am
            always eager to learn new technologies and keep up with the latest
            industry trends
          </p>
          <button className="bg-[#4d5b9e] w-52 p-6 rounded-lg text-white text-bold font-serif m-auto   active:shadow-click focus:outline-none ]">
            <a download={cv} href={cv}>
              download cv
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
