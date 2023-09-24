const { defaultConfig } = require("next/dist/server/config-shared");

function Footer() {
  return (
    <footer className="mt-16 md:mt-24 xl:mt-36 2xl:mt-40  -mx-4 md:-mx-12 lg:-mx-16 xl:-mx-20 2xl:-mx-24 pb-8 md:pb-10 lg:pb-12">
      {/* <div className="w-full flex justify-around mb-6">
        <h4 className="text-lg sora text-violet-50 semibold">Aboneaza-te</h4>
        <form>
          <input
            placeholder="andrei.popescu@gmail.com"
            type="email"
            className="mt-4 border-2  w-full border-violet-500 outline-0 px-4 py-2 sora placeholder:text-violet-50/50 rounded-full bg-violet-500/30 text-violet-50"
          ></input>
          <button className="px-4 py-1 mt-6 md:mt-2 text-violet-50 bg-violet-500 rounded-md poppins hover:shadow-sm hover:shadow-violet-50 transition-all ease-in-out">
            Abonare
          </button>
        </form>
      </div> */}

      <div className="justify-between items-start gap-8 md:gap-4  grid grid-cols-1 md:grid-cols-4">
        <div className="text-violet-50 w-full">
          <a
            href="/"
            className="hover:text-violet-500 transition-all ease-in-out sora text-xl semibold"
          >
            <span className="text-violet-500">@</span>codevs
          </a>
          <p className="mt-2 poppins">
            Inovăm prin cod, transformăm prin tehnologie.
          </p>
          <p className="poppins text-sm mt-6  text-violet-50/50">
            Bd. 1 Decembrie 1918, nr. 21E
          </p>
        </div>
        <div className="flex flex-col w-full gap-1 ">
          <h4 className="text-lg sora text-violet-50 semibold">
            Exploreaza Site-ul
          </h4>
          <a
            href="/despre"
            className="py-2 text-sm poppins hover:text-violet-500 transition-all ease-in-out text-violet-50"
          >
            Despre Noi
          </a>
          <a
            href="/servicii"
            className="py-2  text-sm poppins hover:text-violet-500 transition-all ease-in-out text-violet-50"
          >
            Servicii
          </a>
          {/* <a
            href="/blog"
            className="py-2 text-sm poppins hover:text-violet-500 transition-all ease-in-out text-violet-50"
          >
            Blog
          </a> */}
        </div>
        <div className="w-full">
          <h4 className="text-lg sora text-violet-50 semibold">
            Contacteaza-ne
          </h4>
          <a
            href="mailto:contact.codevs@gmail.com?subject=Colaborare Proiect"
            className="mt-2 underline hover:text-violet-500 transition-all ease-in-out   text-violet-50"
          >
            contact.codevs@gmail.com
          </a>
        </div>
        <div className="w-full">
          <h4 className="text-lg sora text-violet-50 semibold">Legal</h4>
          <p className="mt-2 sora text-sm  text-violet-50">CUI 48735856 </p>
          <p className="mt-2 sora text-sm  text-violet-50">F40/6456</p>
        </div>
      </div>
      <div className="flex flex-col">
        <h5 className="mt-12 w-full text-center text-violet-50  sora">
          © Toate Drepturile Rezervate Codevs
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
