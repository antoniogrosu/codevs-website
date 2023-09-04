function Serviciu() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 md:mt-32 xl:mt-40 2xl:mt-44">
      <div className="hidden md:block p-4 w-96 h-96 bg-violet-50 "></div>
      <div>
        <h1 className="sora text-4xl text-violet-50 semibold">
          Website Personal
        </h1>
        <div className="mt-4 flex justify-start gap-2">
          <p className="py-1 px-2 bg-gray-800/50 poppins text-sm text-violet-50 rounded-md">
            UX Design
          </p>
          <p className="py-1 px-2 bg-gray-800/50 poppins text-sm text-violet-50 rounded-md">
            UX Design
          </p>
          <p className="py-1 px-2 bg-gray-800/50 poppins text-sm text-violet-50 rounded-md">
            UX Design
          </p>
        </div>
        <div className="block md:hidden py-32 w-full mt-12 mb-10  bg-violet-50 "></div>

        <div className="text-violet-50 poppins mt-4">
          Elevăm individualitatea ta pe internet. Cu o echipă de 7 experți în
          software, creăm website-uri personale captivante, reflectând
          unicitatea ta. Design rafinat, funcționalitate impecabilă și un strop
          de magie tehnică, pentru o prezență online memorabilă.
        </div>
      </div>
      <div>
        <h3 className="poppins text-violet-50 text-lg semibold inline-block">
          Timp de Executie
        </h3>
        <p className=" inline-block poppins ml-2 text-violet-50"> ~ 7 zile</p>
        <p className="mt-4 poppins text-violet-50">
          Esti gata sa dai start-ul cu brand-ul tau personal?
        </p>
        <div className="mt-6">
          <a
            href=""
            className="bg-violet-500/30 hover:shadow-md  hover:shadow-violet-50/50 hover:bg-violet-500/80 transition-all ease-in-out px-4 py-2 rounded-xl poppins text-violet-50 border-2 border-violet-500"
          >
            Hai sa discutam
          </a>
        </div>
      </div>
      <div className="border-l-2 md:w-8/12 text-center md:text-left bg-gray-800 border-violet-500 rounded-l-xl rounded-r-md py-2 lg:py-4 xl:py-6 2xl:py-8">
        <h3 className="poppins px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8 text-violet-50 text-lg semibold inline-block">
          Alte Servicii
        </h3>
        <div className="mt-2">
          <p className="border-t-2 poppins text-sm text-violet-50 py-1 px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8 border-violet-500 rounded-r-full">
            Administrare
          </p>
          <p className="border-t-2 mt-1 poppins text-sm text-violet-50 py-1 px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8 border-violet-500 rounded-r-full">
            Administrare
          </p>
          <p className="border-t-2 mt-1 poppins text-sm text-violet-50 py-1 px-1 md:px-2 lg:px-4 xl:px-6 2xl:px-8 border-violet-500 rounded-r-full">
            Administrare
          </p>
        </div>
      </div>
    </div>
  );
}

export default Serviciu;
