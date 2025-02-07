import About from "../../Components/AboutMe/About";
import Hero from "../../Components/Hero/Hero";


const HomePage = () => {
  return (
  
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section>
          <About></About>
    </section>
    </div>
  );
};

export default HomePage;