"use client"

import Image from "next/image"
import chatPerson from "../../public/images/chat-person.jpg"
import { useEffect } from "react"
import { getRooms } from "@/API"

export default function RoomsList(){

    useEffect(()=>{
        getRooms();
    }, [])

    return (
        <>
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
        </>
    )
}