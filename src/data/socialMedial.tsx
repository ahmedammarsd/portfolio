import { BiLogoGmail } from "react-icons/bi";
import { socailLink } from "../types/types";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";

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
    name: "Leetcode",
    link: "https://leetcode.com/ahmedammarsd/",
    icon: <TbBrandLeetcode />,
  },
  {
    name: "Gmail",
    link: "mailto:ahmedammar.sdd@gmail.com",
    icon: <BiLogoGmail />,
  },
];

export const socialMediaDataMobile: socailLink[] = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/ahmed-ammar-sdd",
    icon: <FaLinkedin />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ahmedammarsd",
    icon: <BsTwitterX />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/ahmedammarsd/",
    icon: <FaInstagram />,
  },
  {
    name: "Gmail",
    link: "mailto:ahmedammar.sdd@gmail.com",
    icon: <BiLogoGmail />,
  },
  {
    name: "GitHub",
    link: "https://www.github.com/ahmedammarsd",
    icon: <FaGithub />,
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/ahmedammarsd/",
    icon: <TbBrandLeetcode />,
  },
];
