import About from "../../Components/AboutMe/About";
import Hero from "../../Components/Hero/Hero";
import MyProject from "../../Components/Project/MyProject";
import Skills from "../../Components/Skills/Skills";


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
    </div>
  );
};

export default HomePage;