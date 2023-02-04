import React from "react";

const ProjectsItem = ({ image, title, link, demoLink }) => {
  console.log(image, title);
  return (
    <div className="relative flex items-start justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#fab466] to-[#001b5e] ">
      <img src={image} className=" rounded-xl group-hover:opacity-10" />
      <div className="hidden text-white text-bold group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-center text-white font-bold uppercase tracking-[1.5px] ">
          {title}
        </h3>
        <div className="flex gap-24 pt-2">
          <a href={demoLink} target="_blank">
            Demo{" "}
          </a>
          <a href={link} target="_blank">
            Github
          </a>
        </div>

        <p className="pb-4 pt-2 text-center ">React Js</p>
      </div>
    </div>
  );
};

export default ProjectsItem;
