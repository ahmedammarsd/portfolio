import { IconType } from "react-icons";

//=== For links in navbar
export type navLink = {
  name: string;
  to: string;
};

//=== For Skills
export type skill = {
  name: string;
  icon: React.ReactNode | IconType;
};

//==== For Button
export type propsButton = {
  type: "button" | "submit" | "reset";
  name: string;
  isTransparent: boolean;
};

//==== For Social Medial Links
export type socailLink = {
  name: string;
  link: string;
  icon: React.ReactNode;
};

export type special = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

// === For Experience Data
export type experienceType = {
  nameOfCampany: string;
  positionTitel: string;
  dateOfStart: string;
  dateOfEnd: string | null;
  isPresent: boolean;
  moreDetails: string[];
  location: string;
};
