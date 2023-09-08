import Serviciu from "../components/serviciiPage/Serviciu";

export const metadata = {
  title: "Codevs.ro | Servicii",
  description:
    "Website Personal | Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă.",
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

function Services() {
  return (
    <div className="flex flex-col gap-24 lg:gap-32 xl:gap-36 2xl:gap-40 mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <Serviciu />
      <Serviciu />
      <Serviciu />
    </div>
  );
}

export default Services;
