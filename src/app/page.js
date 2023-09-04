import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Services from "./components/homepage/Services";
import Testimonials from "./components/homepage/Testimonials";
import Contact from "./components/homepage/Contact";
import Head from "next/head";

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
