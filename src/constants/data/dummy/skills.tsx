import { BiLogoTypescript } from "react-icons/bi";
import { skill } from "../../../types/types";
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
} from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";

export const webSkills: skill[] = [
  {
    skill: "C++",
    icon: <SiCplusplus />,
  },
  {
    skill: "HTML",
    icon: <FaHtml5 />,
  },
  {
    skill: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    skill: "JAVASCRIPT",
    icon: <FaJsSquare />,
  },
  {
    skill: "NODE.JS",
    icon: <FaNode />,
  },
  {
    skill: "TYPESCRIPT",
    icon: <BiLogoTypescript />,
  },
  {
    skill: "REACT.JS",
    icon: <FaReact />,
  },
  {
    skill: "NEXT.JS",
    icon: <RiNextjsFill />,
  },
  {
    skill: "GIT",
    icon: <FaGitAlt />,
  },
  {
    skill: "GITHUB",
    icon: <FaGithub />,
  },
  {
    skill: "BOOTSTRAP",
    icon: <FaBootstrap />,
  },
  {
    skill: "TAILWIND",
    icon: <SiTailwindcss />,
  },
  {
    skill: "RTXQuery",
    icon: <SiRedux />,
  },
];

export const mobileSkills: skill[] = [
  {
    skill: "DART",
    icon: <SiDart />,
  },
  {
    skill: "FLUTTER",
    icon: <FaFlutter />,
  },
];

export const dataBase: skill[] = [
  {
    skill: "MySQL",
    icon: <SiMysql />,
  },
  {
    skill: "MONGODB",
    icon: <DiMongodb />,
  },
];
