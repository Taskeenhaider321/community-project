"use client"
import { Inter } from "next/font/google";
import Image from "next/image";
import { asap } from "@/styles/fonts";
import notificationIcon from "../../../public/svgs/notification.svg"
import chatPerson from "../../../public/images/chat-person.jpg";
import NavLinks from "@/components/nav-links";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
   
          <div className="flex flex-row h-screen fixed top-0 left-0 w-screen">
            <div className="h-screen shadow-[4px_-4px_4px_0px_#E3E3E340] flex flex-col justify-between  p-5 md:w-24">
              <div className="flex flex-col gap-10">
                <div className=" h-14 w-14 flex justify-center items-center text-white font-bold text-2xl font-family-asap rounded-xl bg-[#615EF0]">
                  <span className={`${asap.className}`}>Q</span>
                </div>
                <NavLinks />
              </div>

              <div className="flex flex-col justify-center w-full gap-4 items-start">
                <div className=" w-[48px] mx-auto border-2 cursor-pointer border-[#8C8C8C] py-2 rounded-full">
                  <Image
                    className="mx-auto w-7"
                    src={notificationIcon}
                    alt="notification"
                  />
                </div>

                <div className="w-full cursor-pointer ">
                  <Image
                    className="mx-auto w-[50px] rounded-full"
                    src={chatPerson}
                    alt="calender"
                  />
                </div>
              </div>
            </div>
            {children}
          </div>
    
  );
}
