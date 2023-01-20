import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiGit } from "react-icons/di";
import {
  SiTypescript,
  SiMaterialui,
  SiTailwindcss,
  SiStyledcomponents,
} from "react-icons/si";

const skills = [
  {
    id: 1,
    title: "HTML",
    url: <DiHtml5 size={20} />,
    level: "Intedmediate",
  },
  {
    id: 2,
    title: "CSS",
    url: <DiCss3 size={20} />,
    level: "Intedmediate",
  },

  {
    id: 3,
    title: "JavaScript",
    url: <DiJavascript1 size={20} />,
    level: "Intedmediate",
  },
  {
    id: 4,
    title: "React",
    url: <DiReact size={20} />,
    level: "Intedmediate",
  },
  {
    id: 5,
    title: "Git",
    url: <DiGit size={20} />,
    level: "Basic",
  },
  {
    id: 6,
    title: "TypeScript",
    url: <SiTypescript size={20} />,
    level: "Basic",
  },
  {
    id: 7,
    url: <SiTailwindcss size={20} />,
    title: "TailwindCSS",
    level: "Basic",
  },
  {
    id: 8,
    url: <SiMaterialui size={20} />,
    title: "MaterialUI",
    level: "Basic",
  },
  {
    id: 9,
    url: <SiStyledcomponents size={20} />,
    title: "Styled ",
    level: "Basic",
  },
];

export default skills;
