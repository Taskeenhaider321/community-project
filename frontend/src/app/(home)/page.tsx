import Image from "next/image";
import searchSvg from "../../../public/svgs/search.svg";
import chatPerson from "../../../public/images/chat-person.jpg";
import online from "../../../public/svgs/online.svg";
import fileUploadIcon from "../../../public/svgs/attach.svg"
import sendIcon from "../../../public/svgs/send.svg"

export default function Home() {
  return (
    <>
      <div className=" w-[25%] border-r-2 border-[#F5F6F7]">
        {/* Messages Number Box */}
        <div className="text-center flex flex-row justify-center h-[12%] border-b-2 border-[#F5F6F7] items-center gap-3 py-10">
          <p className=" font-semibold text-xl">Messages</p>
          <span className="px-2 py-1 h-7 bg-[#F5F6F7] rounded-full font-semibold text-sm">
            12
          </span>
        </div>

        {/* Search Box */}
        <div className=" px-8 py-5 h-[12%]">
          <div className=" bg-[#F5F6F7] flex flex-row gap-3 w-full text-xl h-12 px-5 rounded-md">
            <Image src={searchSvg} alt="search" className="h-full w-7" />
            <input
              placeholder="Search people"
              type="text"
              className=" bg-[#F5F6F7] focus:outline-none h-full text-lg"
            />
          </div>
        </div>

      {/* All Chat Persons Box */}
        <div className="ps-4 pe-2 py-2 w-full h-[75%] overflow-y-scroll">
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 bg-[#EEF1FF] rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
          {/* Single Chat Person Box  */}
          <div className="p-2 m-2 rounded-lg flex flex-row">
            <div className=" w-1/5 p-1">
              <Image
                src={chatPerson}
                alt="person"
                className="rounded-lg w-14"
              />
            </div>
            <div className="w-4/5 p-1">
              <div className="flex justify-between w-full font-semibold text-sm">
                <h4 className="mt-1 mb-[0.5] text-[#333333]">Person Name</h4>
                <p className=" text-gray-400">30m</p>
              </div>
              <p className="font-semibold text-sm text-[#8C8C8C]">
                Recent Message
              </p>
            </div>
          </div>
          
        </div>
      </div>


      <div className="w-[70%]">
        <div className="flex flex-row justify-start h-[12%] border-b-2 border-[#F5F6F7] gap-4 items-center px-5">
          <div className="">
            <Image src={chatPerson} className=" w-12 rounded-lg" alt="person" />
          </div>
          <div className="flex flex-col">
            <p className=" font-semibold text-xl mt-[0.5]">Chat Person</p>
            <div className=" flex flex-row gap-2 justify-start">
              <Image src={online} alt="anline" />
              <span className=" text-[#333333] font-semibold text-sm">
                Online
              </span>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col h-[75%] overflow-y-scroll gap-1 p-6">
          <div className=" flex mt-4 flex-row items-start gap-4 w-full">
            <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" />
            <div className="px-4 mb-2 radius-without-left-top max-w-[70%] py-2 bg-[#F5F6F7] text-[#333333]">Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here</div>
          </div>
          <div className="w-full flex flex-row gap-4">
            {/* <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" /> */}
            <div className="px-4 max-w-[70%] ms-16 mb-2 radius-without-left-top py-2 bg-[#F5F6F7] text-[#333333]">Message contenet here</div>
          </div>
          <div className=" w-full flex flex-row  gap-4">
            {/* <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" /> */}
            <div className="px-4 max-w-[70%] radius-without-left-top ms-16 mb-2 py-2 bg-[#F5F6F7] text-[#333333]">Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here</div>
          </div>
          <div className=" w-full mt-4 justify-start flex flex-row-reverse gap-4 items-start">
            <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" />
            <div className="px-4 h-10 max-w-[70%] radius-without-right-top py-2 bg-[#615EF0] text-[#FFFFFF]">Message contenet here</div>
          </div>
          <div className=" w-full flex flex-row-reverse gap-4 items-start">
            {/* <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" /> */}
            <div className="px-4 max-w-[70%] radius-without-right-top me-16 mb-2 h-10 py-2 bg-[#615EF0] text-[#FFFFFF]">Message contenet here</div>
          </div>
          <div className=" w-full flex flex-row-reverse gap-4 items-start">
            {/* <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" /> */}
            <div className="px-4 max-w-[70%] radius-without-right-top me-16 mb-2 py-2 bg-[#615EF0] text-[#FFFFFF]">Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here</div>
            
          </div>
          <div className=" w-full flex flex-row-reverse gap-4 items-start">
            {/* <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" /> */}
            <div className="px-4 max-w-[70%] me-16 radius-without-right-top mb-2 py-2 bg-[#615EF0] text-[#FFFFFF]">Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here Message contenet here</div>
          </div>
          <div className=" flex mt-4 flex-row items-start gap-4 w-full">
            <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" />
            <div className="px-4 mb-2 radius-without-left-top max-w-[70%] py-2 bg-[#F5F6F7] text-[#333333]">Message contenet here</div>
          </div>
          <div className=" w-full mt-4 justify-start flex flex-row-reverse gap-4 items-start">
            <Image src={chatPerson} className=" w-12 rounded-lg h-12" alt="" />
            <div className="px-4 h-10 max-w-[70%] radius-without-right-top py-2 bg-[#615EF0] text-[#FFFFFF]">Message contenet here</div>
          </div>
        </div>
        <div className=" h-[12%] w-full flex flex-row px-8 items-center gap-4 justify-start">
            <div className=" w-[4%]">
              <Image src={fileUploadIcon} className=" w-full h-6" alt="" />
            </div>
            <div className=" w-[95%] px-4 p-3 flex flex-row justify-between rounded-lg bg-white border-2 border-[#F5F6F7]">
              <input type="text" className="w-[90%] focus:outline-none"  />
              <Image src={sendIcon} alt="" className="w-8" />

            </div>
        </div>
      </div>
    </>
  );
}
