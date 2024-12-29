import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosDesktop } from "react-icons/io";
import { MdOutlineWebAsset } from "react-icons/md";
import { special } from "../types/types";
import web from "../../../assets/web.jpg";
import mobile from "../../../assets/mobile.jpg";
import desktop from "../../../assets/desktop.jpg";

export const specializationsData: special[] = [
  {
    title: "Web Applications",
    description:
      "I can develop a creative websites , and this my old or first specialty i did started with it, I'm using React.js and sometimes Next.js for creating or developing websites. ",
    icon: <MdOutlineWebAsset />,
    image: web,
  },
  {
    title: "Mobile Applications",
    description:
      "Build a projects that working in more than one platform such as (Android - IOS), I'm using or coding with Flutter framework in projects for mobile Applications",
    icon: <HiOutlineDevicePhoneMobile />,
    image: mobile,
  },
  {
    title: "Desktop Applications",
    description:
      "Build a project or systems the serve the corporate in it's work and as well with more than one platform (Windows - macOS - Linux) , such as Dashboards ",
    icon: <IoIosDesktop />,
    image: desktop,
  },
];
