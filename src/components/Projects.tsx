import { navLinks } from "../data/navLinks";
import { projects } from "../data/projects";
import ProjectShown from "./ProjectShown";
import CardProject from "./shared/CardProject";
import ReactMarquee from "./shared/ReactMarquee";
import Section from "./shared/Section";
import SectionTitle from "./shared/SectionTitle";

const Projects = () => {
  return (
    <Section id={navLinks[3].name}>
      <SectionTitle title={navLinks[3].name} />
      {/* Container Of Projects */}
      <ReactMarquee>
        {projects.map((project) => (
          <CardProject key={project.title} data={project} />
        ))}
      </ReactMarquee>
      <div className="tw-flex tw-justify-center tw-items-center tw-mt-6">
        <select className="tw-block tw-w-[50%]  md:tw-w-full tw-bg-gray-800 tw-border tw-border-gray-700 tw-rounded-md tw-px-4 tw-py-2 tw-text-gray-100 tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 dark:focus:tw-ring-blue-400 tw-transition-all">
          {projects.map((project) => (
            <option key={project.title}>{project.title}</option>
          ))}
        </select>
      </div>
      <ProjectShown project={projects[0]}></ProjectShown>
      {/* Container Of Projects */}
    </Section>
  );
};

export default Projects;
