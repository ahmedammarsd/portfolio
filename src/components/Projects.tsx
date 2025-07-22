import { useState } from "react";
import { navLinks } from "../data/navLinks";
import { projects } from "../data/projects";
import ProjectShown from "./ProjectShown";
import CardProject from "./shared/CardProject";
import ReactMarquee from "./shared/ReactMarquee";
import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";

// I Seperate The Projects In Cards To Avoid The Rendering of All Cards In Every time select or click in Projct
const ProjectsMarquee = ({
  setProjectIndex,
}: {
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <ReactMarquee>
      {projects.map((project) => (
        <a
          key={project.title}
          href="#project"
          onClick={() => setProjectIndex(projects.indexOf(project))}
        >
          <CardProject data={project} />
        </a>
      ))}
    </ReactMarquee>
  );
};
const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  return (
    <Section id={navLinks[4].name}>
      <SectionTitle title={navLinks[4].name} />
      {/* Container Of Projects */}
      <ProjectsMarquee setProjectIndex={setProjectIndex} />
      <div className="tw-flex tw-justify-center tw-items-center tw-mt-6">
        <select
          className="tw-block tw-w-[50%]  md:tw-w-full tw-bg-gray-800 tw-border tw-border-gray-700 tw-rounded-md tw-px-4 tw-py-2 tw-text-gray-100 tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 dark:focus:tw-ring-blue-400 tw-transition-all"
          onChange={(e) => setProjectIndex(e.target.selectedIndex)}
        >
          {projects.map((project) => (
            <option key={project.title} value={projects.indexOf(project)}>
              {project.title}
            </option>
          ))}
        </select>
      </div>
      <ProjectShown project={projects[projectIndex]}></ProjectShown>
      {/* Container Of Projects */}
    </Section>
  );
};

export default Projects;
