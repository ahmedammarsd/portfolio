import { BiLogoGmail } from "react-icons/bi";
import { socailLink } from "../types/types";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

export const socialMediaData: socailLink[] = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ahmed-ammar-sdd",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    link: "https://www.github.com/ahmedammarsd",
    icon: <FaGithub />,
  },
  {
    name: "Gmail",
    link: "mailto:ahmedammar.sdd@gmail.com",
    icon: <BiLogoGmail />,
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/ahmedammarsd/",
    icon: <TbBrandLeetcode />,
  },
];
