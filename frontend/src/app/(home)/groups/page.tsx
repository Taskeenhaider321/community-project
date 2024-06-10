import Image from "next/image";
import searchSvg from "../../../../public/svgs/search.svg";
import Link from "next/link";

export default function Groups() {
  
  return (
        <div className=" w-[25%] border-r-2 border-[#F5F6F7]">
          <div className="text-center flex flex-row justify-center h-20 border-b-2 border-[#F5F6F7] items-center gap-3 py-10">
            <p className=" font-semibold text-xl">Messages</p>
            <span className="px-2 py-1 h-7 bg-[#F5F6F7] rounded-full font-semibold text-sm">
              12
            </span>
          </div>
          <div className=" p-8">
            <div className=" bg-[#F5F6F7] flex flex-row gap-3 w-full text-xl h-12 px-5 rounded-md">
              <Image src={searchSvg} alt="search" className="h-full w-7" />
              <input
                placeholder="Search Group"
                type="text"
                className=" bg-[#F5F6F7] focus:outline-none h-full text-lg"
              />
            </div>
          </div>
        </div>
  );
}
