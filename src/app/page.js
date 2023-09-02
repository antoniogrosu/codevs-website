import Hero from "./components/homePage/Hero";
import About from "./components/homePage/About";
import Services from "./components/homePage/Services";
import Testimonials from "./components/homePage/Testimonials";
import Contact from "./components/homePage/Contact";
function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Homepage;
