import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Specializations from "../components/Specializations";

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
      </main>
    </>
  );
};

export default Home;
