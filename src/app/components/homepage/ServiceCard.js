function ServiceCard() {
  return (
    <div className="hover:scale-110 transition-all cursor-pointer ease-in-out duration-105 flex justify-between flex-col bg-violet-500/20 rounded-md border-2  border-violet-500 hover:border-violet-900">
      <div className="text-sm p-10 w-10/12 mx-auto rounded-xl flex items-center justify-center mt-2 bg-violet-50">
        img
      </div>
      <div className=" text-violet-50 pb-4">
        <h3 className="sora text-violet-50 w-full px-4 md:px-6 lg:px-8 mt-6">
          Website Personal
        </h3>
        <div className="pt-1 mt-2 border-t-2 border-violet-500/50"></div>
        <p className="px-4 md:px-6 lg:px-8 mt-2 text-sm">Design Unic</p>
        <div className="pt-1 mt-2 border-t-2 border-violet-500/50"></div>
        <p className="px-4 md:px-6 lg:px-8 mt-2 text-sm">Design Unic</p>
      </div>
    </div>
  );
}

export default ServiceCard;
