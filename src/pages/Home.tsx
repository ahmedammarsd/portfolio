import { lazy } from "react";

import Hero from "../components/Hero";
import OpenSourceCollaborate from "../components/OpenSourceCollaborate";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
// import Specializations from "../components/Specializations";

const About = lazy(() => import("../components/About"));
const Specializations = lazy(() => import("../components/Specializations"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Skills = lazy(() => import("../components/Skills"));

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Specializations />
      <Experience />
      <Projects />
      <Skills />
      <OpenSourceCollaborate />
    </main>
  );
};

export default Home;
