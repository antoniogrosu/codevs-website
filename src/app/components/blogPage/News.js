import Card from "./Card";
function News() {
  return (
    <div className="mt-16 poppins md:mt-24 xl:mt-36 2xl:mt-40">
      <h1 className="sora text-violet-50 text-4xl semibold">
        Postarile <span className="text-violet-500">@codevs</span>
      </h1>
      <div className="mt-8 grid md:grid-cols-3 grid-cols-1 gap-8 md:gap-12 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default News;
