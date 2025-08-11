import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoIosDesktop } from "react-icons/io";
import { MdOutlineWebAsset } from "react-icons/md";
import { special } from "../types/types";
import web from "./../assets/web.jpg";
import mobile from "./../assets/mobile.jpg";
import desktop from "./../assets/desktop.jpg";

export const specializationsData: special[] = [
  {
    title: "Web Applications",
    description:
      "Build and develop a creative websites, and this my old or first specialty i did started with it, using React.js and sometimes Next.js for creating and developing websites.",
    icon: <MdOutlineWebAsset />,
    image: web,
  },
  {
    title: "Mobile Applications",
    description:
      "Build a projects that working in more than one platform such as (Android, iOS), using or coding with Flutter framework in projects for mobile Applications.",
    icon: <HiOutlineDevicePhoneMobile />,
    image: mobile,
  },
  {
    title: "Desktop Applications",
    description:
      "New Side of my specialty and also not have much experience on it, build a projects or systems the serve the corporate,and using Flutter framework in projects for desktop Applications.",
    icon: <IoIosDesktop />,
    image: desktop,
  },
];
