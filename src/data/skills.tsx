import { BiLogoTypescript } from "react-icons/bi";
import { skill } from "../types/types";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiDart,
  SiMysql,
  SiRedux,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
export const webSkills: skill[] = [
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "BOOTSTRAP",
    icon: <FaBootstrap />,
  },
  {
    name: "TAILWIND",
    icon: <SiTailwindcss />,
  },
  {
    name: "JAVASCRIPT",
    icon: <FaJsSquare />,
  },
  {
    name: "REACT.JS",
    icon: <FaReact />,
  },
  {
    name: "NODE.JS",
    icon: <FaNode />,
  },
  {
    name: "EXPRESS.JS",
    icon: <SiExpress />,
  },

  {
    name: "TYPESCRIPT",
    icon: <BiLogoTypescript />,
  },
  {
    name: "NEXT.JS",
    icon: <RiNextjsFill />,
  },
  {
    name: "GIT",
    icon: <FaGitAlt />,
  },
  {
    name: "GITHUB",
    icon: <FaGithub />,
  },
  {
    name: "RTXQuery",
    icon: <SiRedux />,
  },
];

export const mobileSkills: skill[] = [
  {
    name: "DART",
    icon: <SiDart />,
  },
  {
    name: "FLUTTER",
    icon: <FaFlutter />,
  },
];

export const dataBase: skill[] = [
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "MONGODB",
    icon: <DiMongodb />,
  },
];
