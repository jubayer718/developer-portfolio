import About from "../../Components/AboutMe/About";
import Hero from "../../Components/Hero/Hero";
import MyProject from "../../Components/Project/MyProject";
import Skills from "../../Components/Skills/Skills";
import Contact from "../ContactMe/Contact";


const HomePage = () => {
  return (

    <div>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <About></About>
      </section>
      <section>
        <Skills></Skills>
      </section>
      <section>
        <MyProject></MyProject>
      </section>
      <section className=" w-full lg:w-5/6 mx-auto">
    <Contact></Contact>
      </section>
    </div>
  );
};

export default HomePage;