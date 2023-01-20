import React from "react";
import SkilItem from "./SkilItem";
import SkillsData from "../data/SkillsData";

const Skills = () => {
  const allSkills = SkillsData.map((item) => (
    <SkilItem
      key={item.id}
      title={item.title}
      icon={item.url}
      lvl={item.level}
    />
  ));
  return (
    <div id="skill" className="flex flex-col mt-16 p-4 items-center  ">
      <h2 className="text-4xl text-bold  font-serif pb-16 text-[#001b5e]">
        Skills
      </h2>
      <div className="w-[80%] max-w-[700px] border-2 rounded-lg bg-white pb-8 ">
        <h3 className="text-center text-2xl xs:text-3xl text-bold my-8  ">
          Frontend developer
        </h3>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-2">
          {allSkills}
        </div>
      </div>
    </div>
  );
};

export default Skills;
