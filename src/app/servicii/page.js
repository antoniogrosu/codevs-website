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
      <Serviciu
        src="/website.svg"
        serviciu="Website Personal"
        facts={["UX Design", "SEO"]}
        services={[
          "Hosting",
          "Ilustratii Personalizate",
          "Administrare Continut",
        ]}
        description="Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă."
        nickname="Brand-ul Tau"
      />
      <Serviciu
        src="/application.svg"
        serviciu="Aplicatie Comerciala"
        facts={["Procesor Plata", "Functionaliati Complexe"]}
        services={[
          "Marketing",
          "Intretinere",
          "Hosting",
          "Management-ul Aplicatiei",
        ]}
        description="Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă."
        nickname="Aplicatia Ta"
      />
      <Serviciu
        src="/business.svg"
        serviciu="Unealta Business"
        facts={["CRM", "CMS", "Alte unelte"]}
        services={[
          "Unealta Complet Personalizata",
          "Protectie Ridicata",
          "Intretinere",
          "Hosting",
        ]}
        description="Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în software, creăm website-uri personale captivante, reflectând unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop de magie tehnică, pentru o prezență online memorabilă."
        nickname="Business-ul Tau Eficientizat"
      />
    </div>
  );
}

export default Services;
