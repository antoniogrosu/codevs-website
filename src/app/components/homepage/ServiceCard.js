import Image from "next/image";
function ServiceCard(props) {
  return (
    <a
      href="/servicii"
      className="hover:scale-110 hover:shadow-md hover:shadow-violet-500/50 transition-all cursor-pointer ease-in-out duration-105 grid grid-cols-2 md:flex md:justify-between md:w-10/12 flex-col bg-violet-500/20 rounded-lg border-2   border-violet-500 hover:border-violet-900"
    >
      <div className="text-sm  md:w-10/12 md:mx-auto rounded-xl flex items-center justify-center md:mt-2 ">
        <Image src={props.src} className="w-full" height={0} width={0}></Image>
      </div>
      <div className=" text-violet-50 pb-4">
        <h3 className="sora text-violet-50 w-full px-4 md:px-6 lg:px-8 mt-6">
          {props.service}
        </h3>
        <div className="pt-1 mt-2 border-t-2 border-violet-500/50"></div>
        <p className="px-4 md:px-6 lg:px-8 mt-2 text-sm">{props.benefit[0]}</p>
        <div className="pt-1 mt-2 border-t-2 border-violet-500/50"></div>
        <p className="px-4 md:px-6 lg:px-8 mt-2 text-sm">{props.benefit[1]}</p>
      </div>
    </a>
  );
}

export default ServiceCard;
