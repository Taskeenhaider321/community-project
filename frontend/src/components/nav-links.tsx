"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import chatBlue from "../../public/svgs/chat-blue.svg";
import chatBlack from "../../public/svgs/chat-black.svg";
import calenderBlack from "../../public/svgs/calender-black.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { stateType } from "@/types/stateTypes";

export default function NavLinks() {
  const router = useRouter();
  const currentPath = usePathname();
  

  return (
    <div className="flex flex-col justify-center w-full gap-8 items-start">
      <div className="w-full cursor-pointer">
        <Link href={"/"}>
          {currentPath === "/" ? (
            <Image className="mx-auto w-6" src={chatBlue} alt="chat" />
          ) : (
            <Image className="mx-auto w-6" src={chatBlack} alt="chat" />
          )}
        </Link>
      </div>
      <div className="w-full cursor-pointer">
        <Link href={"/groups"}>
          {currentPath === "/groups" ? (
            <svg
              className=" w-8 mx-auto  text-[#615EF0] dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
          ) : (
            <svg
              className=" w-8 mx-auto text-black  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              />
            </svg>
          )}
        </Link>
      </div>
      <div className="w-full cursor-pointer">
        <Image className="mx-auto w-6" src={calenderBlack} alt="calender" />
      </div>
    </div>
  );
}
