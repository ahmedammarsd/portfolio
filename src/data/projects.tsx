import { projectType } from "../types/types";
import coding from "./../assets/coding.jpg";
import bestTeamImage from "../assets/image_projects/bestteam.png";

export const projects: projectType[] = [
  {
    image: bestTeamImage,
    title: "Best Team",
    description:
      "platform to spread sports and olympic cultrue, develop knowledge and sports analysis , and promote mental and physical entertainment programs in the kingdom of saudi arabia and arab world",
    stack: [
      "React.js",
      "i18next",
      "Redux-toolkit",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    link: "https://bestteam.tv/",
    github: "https://github.com/ahmedammarsd/Best-Team-Website",
    category: "web",
    status: "online",
    images: ["test1.png", "test2.png", "test3.png"],
    features: [
      "Dashboard for admin To control the website in spcicific content in Landing page",
      "Responsive design",
      "Two Languages English and Arabic",
      "React Quill Editor for text editor and content",
      "Axios for API",
      "AOS for animation",
      "..etc",
    ],
  },
  {
    image: coding,
    title: "project 2",
    description: "lorem ipsum lorem ipsum the good device for w",
    stack: ["react", "typescript", "nodejs", "expressjs", "mongodb"],
    link: "test.come",
    github: "test.com",
    category: "web",
    status: "online",
    images: ["test1.png", "test2.png", "test3.png"],
  },
  {
    image: coding,
    title: "project 3",
    description:
      "lorem ipsum lorem ipsum the good device for work good as fullstack in web and mobile , which mac ",
    stack: ["react", "typescript", "nodejs", "expressjs", "mongodb"],
    link: "test.come",
    github: "test.com",
    category: "web",
    status: "online",
    images: ["test1.png", "test2.png", "test3.png"],
  },
];
