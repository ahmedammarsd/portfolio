import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
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
      </main>
    </>
  );
};

export default Home;
