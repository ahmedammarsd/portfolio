import { lazy } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
// import Specializations from "../components/Specializations";

const About = lazy(() => import("../components/About"));
const Specializations = lazy(() => import("../components/Specializations"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </>
  );
};

export default Home;
