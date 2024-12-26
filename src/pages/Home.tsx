import About from "../components/About";
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
      </main>
    </>
  );
};

export default Home;
