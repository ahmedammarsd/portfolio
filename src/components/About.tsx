import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";
import imageCoding from "../assets/coding.jpg";
import Pragraph from "./shared/Pragraph";
import { navLinks } from "../data/navLinks";

const About = () => {
  return (
    <Section id={navLinks[0].to}>
      <SectionTitle title={navLinks[0].name} />
      {/* About description & image */}
      <div className="tw-flex md:tw-flex-col-reverse tw-items-start tw-gap-5 tw-justify-between">
        {/* Description */}
        <div className="tw-flex-[2]">
          <Pragraph marginTop={false}>
            Hi again, I'm Ahmed Ammar Siddig, I'm in beginning and start a long
            journey in technologies and systems and very interested in this
            field and I thank Allah for helping me to reach this point in the
            field and I'm tenacious to continue this journey and be persistent
            in learning and improving my experience
          </Pragraph>
          <Pragraph>
            In every Project I’m prone to start from scratch and collaborate
            with team in different phases specially on analysis and schema
            design this helps me to know more details and insights about project
            and focusing more on build User Interface and handle all operations
            that need it in web or mobile application because this my specialty.
          </Pragraph>
          <Pragraph>
            Very related for different phases or apects of project like thoughts
            about project Architecture, DB schema design and more.
          </Pragraph>
        </div>
        {/* Description */}
        {/* Image */}
        <div className="tw-flex-[1] tw-relative tw-mb-7">
          <img
            src={imageCoding}
            className="tw-border-[0.5px] tw-border-light-green tw-rounded-md tw-object-cover"
            alt="image-for-someone-coding"
            loading="lazy"
          />
          <div className="tw-w-full tw-h-full tw-absolute tw-top-4 tw-left-1.5 -tw-z-1 tw-rounded-md  tw-border tw-border-light-green"></div>
        </div>
        {/* Image */}
      </div>
      {/* About description & image */}
    </Section>
  );
};

export default About;
