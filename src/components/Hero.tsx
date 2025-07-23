import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import SocialMedia from "./SocialMedia";

const Hero = () => {
  return (
    <section
      className="tw-h-dvh tw-flex tw-items-center tw-justify-center tw-relative"
      id="hero"
    >
      {/* Container For Summary */}
      <div className="tw-flex tw-flex-col tw-px-8 lg:tw-px-5 md:tw-px-2 tw-gap-2 tw-w-[70%] lg:tw-w-[70%] md:tw-w-[90%]">
        <span className="tw-text-light-green tw-text-3xl md:tw-text-sm xs:tw-text-xl">
          Welcome, I'm,
        </span>
        <h1 className="tw-text-[60px] md:tw-text-4xl xs:tw-text-3xl tw-text-white tw-uppercase tw-text-nowrap">
          Ahmed Ammar.
        </h1>
        <h2 className="tw-text-middle-grey tw-text-4xl md:tw-text-xl">
          Specialist in <span className="tw-text-light-green">Web</span> ,
          Mobile and Desktop Applications.
        </h2>
        <p className="tw-text-middle-grey tw-text-2xl md:tw-text-[19px] sm:tw-text-[17px] sm:tw-leading-6 tw-mt-6">
          I’m a software engineer specializing in building web applications,
          with experience developing applications and systems across multiple
          platforms, including Android, iOS, and Desktop using Flutter
          {/* different platforms exceptional digital experiences for both web and
          mobile platforms. Currently, I’m focused on building Continous
          Intergration Continuos Deployment(CICD) solutions for organizations. */}
        </p>
        <div className="tw-flex tw-gap-4 tw-mt-6 tw-text-4xl tw-text-light-two-green">
          <FaReact />
          <FaFlutter />
        </div>
      </div>
      {/* Container For Summary */}
      <SocialMedia />
    </section>
  );
};

export default Hero;
