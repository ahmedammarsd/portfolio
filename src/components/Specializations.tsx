import { specializationsData } from "../data/specializations";
import { navLinks } from "../data/navLinks";
import CardSpecilty from "./shared/CardSpecilty";
import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";

const Specializations = () => {
  return (
    <Section id={navLinks[1].name}>
      <SectionTitle title={navLinks[1].name} />
      {/* Container for 3 cards */}
      <div className="tw-flex tw-items-center tw-justify-evenly tw-flex-wrap">
        {specializationsData.map((special) => (
          <CardSpecilty
            icon={special.icon}
            title={special.title}
            description={special.description}
            image={special.image}
          />
        ))}
      </div>
      {/* Container for 3 cards */}
    </Section>
  );
};

export default Specializations;
