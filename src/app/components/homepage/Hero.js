import Image from "next/image";
function Hero() {
  return (
    <div className="md:flex items-center justify-between gap-8  mt-36 md:h-auto md:mt-32 xl:mt-40 2xl:mt-44">
      <div className="poppins md:w-8/12  text-violet-50">
        <h1 className="semibold text-4xl">Îmbrățișează Viitorul Digital</h1>
        <Image
          src="/heroAnimation.svg"
          className="md:hidden block mx-auto w-full my-8"
          width={0}
          height={0}
        />
        <p className="mt-8 mb-12 md:w-10/12">
          Suntem Codevs - Pasiunea Noastră Este Să Transformăm Viziunile Tale în
          Experiențe Online Memorabile.
        </p>
        <a
          href="/servicii"
          className="block md:inline-block transition text-center duration-150 ease-linear hover:shadow-md hover:shadow-violet-300 px-4 py-2 rounded-md bg-violet-500"
        >
          Serviciile Noastre
        </a>
      </div>
      <div>
        <Image
          src="/heroAnimation.svg"
          className="hidden md:block p-4 w-96 h-96
          animated "
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}

export default Hero;
