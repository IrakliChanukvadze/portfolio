import React, { useState } from "react";
import ProjectsItem from "./ProjectsItem";
import ProjectsData from "../data/ProjectsData";

const getProjects = (number) => {
  const result = [];
  if (number > ProjectsData.length) {
    number = ProjectsData.length;
  }
  for (let item = 0; item < number; item++) {
    result.push(
      <ProjectsItem
        key={ProjectsData[item].id}
        image={ProjectsData[item].url}
        title={ProjectsData[item].title}
        link={ProjectsData[item].link}
        demoLink={ProjectsData[item].demoLink}
      />
    );
  }
  return result;
};

const Projects = () => {
  console.log(ProjectsData);
  const [num, setNum] = useState(6);
  // const project = ProjectsData.map((item) => (
  //   <ProjectsItem
  //     key={item.id}
  //     image={item.url}
  //     title={item.title}
  //     link={item.link}
  //   />
  // ));
  const project = getProjects(num);
  const seeMore = () => {
    if (num > ProjectsData.length) {
      setNum(6);
      return;
    }
    if (window.innerWidth >= 1280) {
      setNum((prev) => prev + 3);
    } else {
      setNum((prev) => prev + 2);
    }
  };

  return (
    <div
      className="max-w-[1440px] w-[80%]  m-auto p-4 my-16 flex flex-col items-center"
      id="projects"
    >
      <h2 className="text-4xl text-bold  font-serif pb-16 text-[#001b5e]">
        Projects
      </h2>
      <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 ">
        {project}
      </div>
      <button
        className="bg-[#4d5b9e] w-44 p-6 rounded-lg text-white text-bold font-serif mt-16 active:shadow-click focus:outline-none"
        onClick={seeMore}
      >
        {num < ProjectsData.length ? "See More" : "See Less"}
      </button>
    </div>
  );
};

export default Projects;
