import { navLinks } from "../data/navLinks";
import { projects } from "../data/projects";
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

      {/* Container Of Projects */}
    </Section>
  );
};

export default Projects;
