import { useState } from "react";
import { experienceData } from "../data/experience";
import { navLinks } from "../data/navLinks";
import ExperienceCard from "./shared/ExperienceCard";
import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";
import { MdOutlineMenuOpen } from "react-icons/md";

{
  /* Button or Icon For handle Show Meun  */
}
type buttonHandleShowMenuProp = {
  showMeun: boolean;
  handleShowMeun: () => void;
};
const ButtonHandleShowMenu = ({
  showMeun,
  handleShowMeun,
}: buttonHandleShowMenuProp) => {
  return (
    <div
      className={`tw-hidden lg:tw-block lg:tw-absolute tw-top-[-35px] tw-text-xl lg:tw-right-3 tw-text-white tw-p-4 tw-rounded-lg tw-border-[0.1px] tw-border-gray-600
          ${showMeun ? "tw-bg-[#64ffdb52]" : "tw-bg-transparent"}
          `}
      onClick={() => handleShowMeun()}
    >
      <MdOutlineMenuOpen />
    </div>
  );
};
{
  /* =============================== */
}
const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [showMeun, setShowMeun] = useState(false);
  const handleShowMeun = () => setShowMeun((prev) => !prev);
  return (
    <Section id={navLinks[2].name}>
      <SectionTitle title={navLinks[2].name} />
      {/* Container for Selector experience and experiences */}
      <div className="tw-flex tw-gap-2 tw-relative">
        {/* Content */}

        <ButtonHandleShowMenu
          showMeun={showMeun}
          handleShowMeun={handleShowMeun}
        />
        <div
          className={`tw-flex-[1] lg:tw-absolute lg:tw-w-full lg:tw-bg-transparent lg:tw-backdrop-blur-md lg:tw-shadow-sm lg:tw-p-7 lg:tw-rounded-lg lg:tw-border-[0.1px] lg:tw-border-gray-800 tw-transition-all tw-duration-700
            lg:tw-top-9
            ${showMeun ? "lg:tw-translate-x-[0]" : "lg:tw-translate-x-[-150%]"}
            `}
          role="dialog"
        >
          {experienceData.map((exp, index) => (
            <div
              key={exp.positionTitel}
              className={`tw-border-l-2 tw-text-middle-grey tw-py-3 tw-px-3 tw-overflow-hidden tw-whitespace-nowrap tw-cursor-pointer
            ${
              selectedExperience == index
                ? "tw-bg-[#64ffdb52] tw-text-white tw-border-l-light-green"
                : "hover:tw-bg-[#64ffdb13]"
            }
            `}
              onClick={() => {
                setSelectedExperience(index);
                handleShowMeun();
              }}
            >
              {exp.nameOfCampany}
            </div>
          ))}
        </div>
        <div className="tw-flex-[4]">
          <ExperienceCard data={experienceData[selectedExperience]} />
        </div>
        {/* Content */}
      </div>
    </Section>
  );
};

export default Experience;
