function Contact() {
  return (
    <div className="poppins flex flex-col items-center text-violet-50 px-4 md:px-8 lg:px-16 bg-gray-800 mt-12 rounded-md md:rounded-full py-16 md:py-24 xl:py-36 2xl:py-40">
      <h1 className="semibold text-center text-xl md:text-4xl">
        Construim viitorul ideilor tale – <br /> să incepem această călătorie
        impreună
      </h1>
      <a
        href="tel:+40747738250"
        className="mt-8 cursor-pointer w-full md:w-4/12 block md:inline-block transition text-center duration-150 ease-linear hover:shadow-md hover:shadow-violet-300 px-4 py-2 rounded-md bg-violet-500"
      >
        Programeaza o intalnire
      </a>
    </div>
  );
}

export default Contact;
