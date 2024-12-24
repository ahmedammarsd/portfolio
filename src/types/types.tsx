import { IconType } from "react-icons";

export type navLink = {
  name: string;
  to: string;
};

export type skill = {
  skill: string;
  icon: React.ReactNode | IconType;
};
