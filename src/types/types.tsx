import { IconType } from "react-icons";

export type navLink = {
  name: string;
  to: string;
};

export type skill = {
  skill: string;
  icon: React.ReactNode | IconType;
};

export type propsButton = {
  type: "button" | "submit" | "reset";
  name: string;
  isTransparent: boolean;
};
