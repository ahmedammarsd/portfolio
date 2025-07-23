import { navLinks } from "../data/navLinks";
import { dataBase, mobileSkills, webSkills } from "../data/skills";
import { skill } from "../types/types";
import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";

const IconContainer = ({ skill }: { skill: skill }) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-px-5  tw-py-3 tw-text-white hover:tw-bg-gray-900 tw-rounded-md tw-duration-300">
      <p className="tw-text-4xl">{skill.icon}</p>
      <p>{skill.name}</p>
    </div>
  );
};
const Skills = () => {
  const skills: skill[] = [...webSkills, ...mobileSkills, ...dataBase];
  return (
    <Section id={navLinks[3].name}>
      <SectionTitle title={navLinks[3].name} />
      {/* <ReactMarquee>
        {skills.map((skill) => (
          <IconContainer key={skill.name} skill={skill} />
        ))}
      </ReactMarquee> */}
      <div className="tw-grid tw-grid-cols-8 lg:tw-grid-cols-5 md:tw-grid-cols-3 tw-gap-5">
        {skills.map((skill) => (
          <IconContainer key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
