function Card() {
  return (
    <a
      href="/"
      className="rounded-md bg-gray-800 cursor-pointer transition-all ease-in-out hover:scale-105 hover:shadow-md hover:shadow-violet-500/50"
    >
      <div className="py-16 bg-violet-50 w-full rounded-t-md"></div>
      <div className="poppins text-violet-50 px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-4 2xl:px-10 2xl:py-5">
        <h4 className="text-lg semibold">Titlul Postarii</h4>
        <p className="text-sm mt-2">
          Descriere scurta dar coerenta a postarii in cauza
        </p>
        <div className="flex justify-start gap-2 mt-4">
          <p className="py-1 px-2 bg-violet-500/20 poppins text-sm text-violet-50 rounded-md">
            Tag
          </p>
          <p className="py-1 px-2 bg-violet-500/20 poppins text-sm text-violet-50 rounded-md">
            Tag
          </p>
        </div>
      </div>
    </a>
  );
}

export default Card;
