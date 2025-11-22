import { lazy, Suspense } from "react";

import Hero from "../components/Hero";
import Loading from "../components/shared/Loading";
// import About from "../components/About";
// import Experience from "../components/Experience";
// import Projects from "../components/Projects";
// import Specializations from "../components/Specializations";

const About = lazy(() => import("../components/About"));
const Specializations = lazy(() => import("../components/Specializations"));
const Experience = lazy(() => import("../components/Experience"));
const Projects = lazy(() => import("../components/Projects"));
const Skills = lazy(() => import("../components/Skills"));
const OpenSourceCollaborate = lazy(
  () => import("../components/OpenSourceCollaborate")
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Specializations />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <OpenSourceCollaborate />
      </Suspense>
    </main>
  );
};

export default Home;
