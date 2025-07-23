import { projectType } from "../types/types";
import bestTeamImage from "../assets/image_projects/bestteam2.png";
import bestTeamImageMobile from "../assets/image_projects/bestteam_mobile.png";

import mongizImage from "../assets/mongiz_gold_project/laptop.png";
import mongizMobile from "../assets/mongiz_gold_project/mobile.png";

import sganaLaptop from "../assets/sgana_project/laptop.png";
import sganaMobile from "../assets/sgana_project/mobile.png";

import landingPageLaptop from "../assets/landing_page/laptop.png";
import landingPageMobile from "../assets/landing_page/mobile.png";

import rightLaptop from "../assets/right_project/laptop.png";
import rightMobile from "../assets/right_project/mobile.png";

import vetCareLaptop from "../assets/vet_care_project/laptop.png";
import vetCareMobile from "../assets/vet_care_project/mobile.png";

import turkishRealStateLaptop from "../assets/turkish_realstate_project/laptop.png";
import turkishRealStateMobile from "../assets/turkish_realstate_project/mobile.png";

import dialysisMobile from "../assets/dialysis_app.jpg";

export const projects: projectType[] = [
  {
    image: vetCareLaptop,
    imageMobile: vetCareMobile,
    title: "Vet Care Clinic",
    description:
      "It's a Landing page for Vet Care Clinic, for display information about Vet Care Clinic, services and more",
    stack: ["React.js", "Tailwind", "Typescript", "i18next"],
    link: "https://vetcare.om/",
    github: "",
    category: "web",
    status: "online",
    images: [],
    features: [
      "Multiple Videos In Hero Section and optimize the performance",
      "Responsive design",
      "Support Two Languages English and Arabic",
    ],
  },
  {
    image: turkishRealStateLaptop,
    imageMobile: turkishRealStateMobile,
    title: "Best Select for real estate and General services in Turkey",
    description:
      "Best Select Real Estate is a large-scale Arab company, specialized in marketing and real estate development in Turkey. It was established in 2014 in Istanbul, and it has a large team of specialists in the Turkish real estate market, and it has many agreements and dealings with most of the major construction companies in Istanbul",
    stack: ["React.js", "Tailwind", "i18next", "Redux-toolkit"],
    link: "",
    github: "",
    category: "web",
    status: "offline",
    images: [],
    features: [
      "Responsive design",
      "Support Two Languages English and Arabic",
      "Axios for API",
    ],
  },
  {
    image: bestTeamImage,
    imageMobile: bestTeamImageMobile,
    title: "Best Team",
    description:
      "platform to spread sports and olympic cultrue, develop knowledge and sports analysis , and promote mental and physical entertainment programs in the kingdom of saudi arabia and arab world",
    stack: [
      "React.js",
      "Tailwind",
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
    images: [],
    features: [
      "Dashboard for admin To control the website in spcicific content in Landing page",
      "Responsive design",
      "Support Two Languages English and Arabic",
      "React Quill Editor for text editor and content",
      "Axios for API",
      "AOS for animation",
      "..etc",
    ],
  },
  {
    image: mongizImage,
    imageMobile: mongizMobile,
    title: "Mongez Trading LLC",
    description:
      "Landing page for Mongez Trading LLC and it's company work in the field of gold trade of all kinds, general and trade, and even in the field of import and export.",
    stack: ["React.js", "Tailwind", "i18next"],
    link: "https://mongez-gold.netlify.app/",
    github: "",
    category: "web",
    status: "online",
    images: [],
    features: [
      "Simple landing page",
      "Simple Design",
      "Responsive design",
      "Support Two Languages English and Arabic",
      "AOS for animation",
    ],
  },
  {
    image: sganaLaptop,
    imageMobile: sganaMobile,
    title: "Sajjanah Market Service",
    description:
      "A news platform that publishes and updates building materials prices on a regular and continuous basis, in addition to many written and visual articles on building and construction topics in Sudan, common mistakes related to building and construction, and providing purchase offers from the best companies, craftsmen, and suppliers.",
    stack: [
      "React.js",
      "Tailwind",
      "i18next",
      "Redux-toolkit",
      "Node.js",
      "Express.js",
      "MySQL",
    ],
    link: "https://sgana2.netlify.app/",
    github: "https://github.com/ahmedammarsd/Sgana-Website",
    category: "web",
    status: "online",
    images: [],
    features: [
      "Separate Dashboard for admin To control the website in spcicific content in Landing page",
      "Charts for statistics and make decisions",
      "Responsive design",
      "React Quill Editor for text editor and content",
      "Axios for API",
      "AOS for animation",
    ],
  },

  {
    image: rightLaptop,
    imageMobile: rightMobile,
    title: "Right For Advance Business",
    description: "This Simple Landing Page For company that i working on it...",
    stack: ["React.js", "Tailwind"],
    link: "",
    github: "",
    category: "web",
    status: "offline",
    features: [
      "Simple landing page",
      "Simple Design",
      "Responsive design",
      "Simple Charts",
    ],
    images: [],
  },
  {
    image: dialysisMobile,
    imageMobile: dialysisMobile,
    title: "Dialysis Mobile App",
    description:
      "An Mobile Application that helps patients after registration to benefit from using the application by updating their data and patient records. and also can know about all centers that related to the dialysis centers in Sudan",
    stack: ["Flutter", "Provider", "Dio"],
    link: "",
    github: "",
    category: "mobile",
    status: "online",
    features: [
      "Simple UI Mobile App",
      "Easy To Use and dealing with all the features of the app",
      "Patients can update their data and patient records",
      "Patients can know about all centers that related to the dialysis centers in Sudan",
      "Link with Civil Registry",
    ],
    images: [],
  },
  {
    image: landingPageLaptop,
    imageMobile: landingPageMobile,
    title: "Landing Page",
    description:
      "This Simple Landing Page For Test and practice my skills when i started learn react and i took the design from figma and I did it",
    stack: ["React.js", "Tailwind"],
    link: "https://markting-su.netlify.app/",
    github: "https://github.com/ahmedammarsd/landing-page",
    category: "web",
    status: "online",
    features: [
      "Simple landing page",
      "Simple Design",
      "Responsive design",
      "Simple Charts",
    ],
    images: [],
  },
];
