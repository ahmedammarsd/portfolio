import TextContainer from "./shared/TextContainer";
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { projectType } from "../types/types";
import CollectionModels from "./3D-models/CollectionModels";

const ContainerLink = ({
  link,
  icon,
}: {
  link: string;
  icon: React.ReactNode;
}) => {
  return (
    <a href={link != "" ? link : "#"} target="_blank">
      <div
        className={`tw-flex tw-items-center tw-justify-center tw-gap-5 ${
          link == "" ? "tw-opacity-50" : ""
        }`}
      >
        <TextContainer
          icon={icon}
          className={`tw-px-7 tw-py-3 ${
            link != "" ? "hover:tw-bg-gray-800" : ""
          } tw-duration-300`}
        />
      </div>
    </a>
  );
};

const ProjectShown = ({ project }: { project: projectType }) => {
  return (
    <div
      className="tw-flex tw-items-start tw-justify-center tw-w-full md:tw-flex-col tw-gap-2 tw-mt-7 "
      id="project"
    >
      {/* 3D Model */}
      <div className="tw-w-[50%] tw-shadow-md tw-bg-gray-900 tw-rounded-md tw-min-h-[700px] md:tw-min-h-[450px] md:tw-w-full">
        <CollectionModels
          image={project.image}
          imageMobile={project.imageMobile}
          projectType={project.category}
        />
      </div>
      {/* 3D Model */}
      {/* Project Details */}
      <div className="tw-w-[50%] md:tw-w-full tw-shadow-md tw-bg-gray-900 tw-rounded-md tw-flex tw-min-h-[700px] md:tw-min-h-[450px] tw-flex-col tw-p-5 tw-gap-5 tw-relative">
        <span
          className={`${
            project.status == "online"
              ? "tw-bg-green-600 tw-animate-pulse"
              : "tw-bg-red-600 tw-animate-pulse"
          } tw-w-2 tw-h-2 tw-rounded-full tw-absolute tw-top-5 tw-right-5`}
        />
        {/* Title Project */}
        <h3 className="tw-text-white tw-text-xl md:tw-text-lg tw-font-bold">
          {project.title}
        </h3>
        {/* Title Project */}
        {/* Description */}
        <p className="tw-text-middle-grey tw-text-[16px] sm:tw-text-sm">
          {project.description}
        </p>
        {/* Description */}
        {/* Stack */}
        <div>
          <h4 className="tw-text-white tw-text-lg md:tw-text-[16px] tw-font-bold tw-mb-3">
            Technology Used
          </h4>
          <div className="tw-flex tw-flex-wrap tw-gap-2">
            {project.stack.map((stack) => (
              <TextContainer key={stack} text={stack} />
            ))}
          </div>
        </div>
        {/* End Stack */}
        {/* Features */}
        {project.features?.length != 0 ? (
          <div>
            <h4 className="tw-text-white tw-text-lg md:tw-text-[16px] tw-font-bold tw-mb-3">
              Features
            </h4>
            <ul className=" tw-list-disc tw-ml-8 tw-text-middle-grey tw-text-[16px] sm:tw-text-sm">
              {project.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {/* End Features */}
        {/* Links -- Here it will be with icons and every link for example like github has a link it will be like active
            or not active it will be visible but not clickable and little of opacity */}
        <h4 className="tw-text-white tw-text-lg md:tw-text-[16px] tw-font-bold tw-mb-2">
          Links
        </h4>
        <div className="tw-flex tw-gap-3">
          {<ContainerLink icon={<GoLinkExternal />} link={project.link} />}
          {<ContainerLink icon={<FaGithub />} link={project.github} />}
        </div>
        {/* Links */}
      </div>
      {/* Project Details */}
    </div>
  );
};

export default ProjectShown;
