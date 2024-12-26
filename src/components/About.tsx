import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";
import imageCoding from "../assets/coding.jpg";
import Pragraph from "./shared/Pragraph";
import { navLinks } from "../constants/data/navLinks";

const About = () => {
  return (
    <Section id={navLinks[0].name}>
      <SectionTitle title={navLinks[0].name} />
      {/* About description & image */}
      <div className="tw-flex md:tw-flex-col-reverse tw-items-start tw-gap-5 tw-justify-between">
        {/* Description */}
        <div className="tw-flex-[2]">
          <Pragraph marginTop={false}>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </Pragraph>
          <Pragraph>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </Pragraph>
          <Pragraph>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure error
            animi voluptates pariatur eos modi, aliquam eligendi minus aperiam
            sit repudiandae? Tempore harum consequatur blanditiis amet eos animi
            culpa laborum.
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
