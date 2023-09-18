import Image from "next/image";
function Hero() {
  return (
    <div className="poppins mt-24 md:mt-32 xl:mt-40 2xl:mt-44 grid md:grid-cols-2 grid-cols-1 gap-x-2 gap-y-8">
      <h1 className="semibold text-4xl text-violet-50">
        Transformăm{" "}
        <span className="text-violet-500">
          Viziunea Ta în Realitate Digitală
        </span>
      </h1>
      <p className="text-violet-50">
        Bine ai revenit în spațiul online pe care îl definim împreună. Suntem
        aici pentru că împărtășim aceeași pasiune pentru inovație și succes.
      </p>
      <div className="md:w-8/12  ">
        <Image src="/vision.svg" width={0} height={0} className="w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-violet-50">
          In fiecare linie de cod și în fiecare pixel plasmăm esența ideilor
          tale, pentru că în lumea digitală, fiecare detaliu contează.
        </p>{" "}
        <p className="text-violet-50">
          Suntem mai mult decât o echipă de dezvoltatori – suntem partenerii tăi
          în drumul spre transformarea viselor în experiențe digitale
          extraordinare.
        </p>{" "}
        <p className="text-violet-50">
          Cu fiecare proiect pe care-l Dezvoltam, creăm o conexiune durabilă
          între tehnologie și umanitate.
        </p>
      </div>
    </div>
  );
}

export default Hero;
