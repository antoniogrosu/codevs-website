function About() {
  return (
    <div className="flex items-center justify-between gap-12 md:mt-24 xl:mt-36 2xl:mt-40">
      <div className="hidden md:block py-32 w-1/2 h-full bg-violet-50"></div>
      <div className="poppins text-violet-50 md:w-9/12">
        <h1 className="semibold text-4xl">
          La <span className="sora text-violet-500">codevs</span> facem totul{" "}
          <br />
          Într-un mod unic
        </h1>
        <div className="md:hidden block py-32 w-full my-8 bg-violet-50 "></div>

        <p className="mt-8 mb-12 md:w-10/12">
          Suntem o echipă dedicată pasionată de inovație și creativitate. Cu o
          abordare atentă la detalii, ne străduim să transformăm fiecare proiect
          într-o experiență digitală excepțională. Împărtășim o viziune comună:
          aceea de a crea soluții care nu doar satisfac nevoile, dar și depășesc
          așteptările. Hai să împreunăm forțele și să construim împreună
          viitorul digital!
        </p>
      </div>
    </div>
  );
}
export default About;
