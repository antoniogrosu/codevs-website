import Hero from "../components/aboutPage/Hero";
import Technologies from "../components/aboutPage/Technologies";
import Principles from "../components/aboutPage/Principles";
import Contact from "../components/homepage/Contact";

export const metadata = {
  title: "Codevs.ro | Despre Noi",
  description:
    "Cu fiecare proiect pe care-l Dezvoltam, creăm o conexiune durabilă între tehnologie și umanitate.",
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Codevs.ro | Home",
  //   description: "Suntem Codevs - Pasiunea Noastră Este Să Transformăm Viziunile Tale în Experiențe Online Memorabile",
  //   siteId: "1467726470533754880",
  //   creator: "@codevs.ro",
  //   creatorId: "1467726470533754880",
  //   images: ["https://nextjs.org/og.png"],
  // },
};

function AboutPage() {
  return (
    <>
      <Hero />
      <Technologies />
      <Principles />
      <Contact />
    </>
  );
}

export default AboutPage;
