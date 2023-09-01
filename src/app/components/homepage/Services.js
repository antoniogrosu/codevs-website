import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <div className="poppins mt-16 md:mt-24 xl:mt-36 2xl:mt-40">
      <h1 className="semibold text-4xl md:text-center text-violet-50">
        Oferim <span className="text-violet-500">plus valoare</span> tuturor
        prin serviciile noastre{" "}
      </h1>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Services;
