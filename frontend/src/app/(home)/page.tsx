"use client";
import Image from "next/image";
import searchSvg from "../../../public/svgs/search.svg";
import chatPerson from "../../../public/images/chat-person.jpg";
import online from "../../../public/svgs/online.svg";
import fileUploadIcon from "../../../public/svgs/attach.svg";
import sendIcon from "../../../public/svgs/send.svg";
import { getRooms } from "@/API/rooms";
import RoomsList from "@/components/rooms-list";
import { useSelector } from "react-redux";
import { stateType } from "@/types/stateTypes";
import { userType } from "@/types/basicTypes";
import io, { Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { getRoomChats } from "@/API/chats";

export default function Home() {
  const currentRoom = useSelector((state: stateType) => state.selectedRoom);
  const currentUser = useSelector((state: stateType) => state.user);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const userToken = Cookies.get("userToken");
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    const socket = io("http://localhost:4000", {
      auth: {
        token: userToken,
      },
    });

    console.log(socket);

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  socket?.on("new-message", (message: any) => {
    console.log(message);

    setMessages((prevMessages: any) => [...prevMessages, message]);
    checkChats();
  });

  const checkChats = async () => {
    const newChat = await getRoomChats(
      Cookies.get("userToken"),
      currentRoom._id
    );
    console.log(newChat);
  };

  const handleSendMessage = () => {
    if (socket && newMessage.length > 0) {
      const messageData = {
        room_id: currentRoom._id,
        content: newMessage,
      };
      socket.emit("send", messageData);
      setNewMessage("");
    }
  };

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
        <div className=" px-8 py-2 h-[10%]">
          <div className=" bg-[#F5F6F7] flex flex-row gap-3 w-full text-xl h-12 px-5 rounded-md">
            <Image src={searchSvg} alt="search" className="h-full w-7" />
            <input
              placeholder="Search people"
              type="text"
              className=" bg-[#F5F6F7] focus:outline-none h-full text-lg"
            />
          </div>
        </div>
        <RoomsList />
      </div>

      <div className="w-[70%]">
        {JSON.stringify(currentRoom) !== JSON.stringify({}) ? (
          <>
            <div className="flex flex-row justify-start h-[12%] border-b-2 border-[#F5F6F7] gap-4 items-center px-5">
              <div className="">
                <Image
                  src={chatPerson}
                  className=" w-12 rounded-lg"
                  alt="person"
                />
              </div>
              <div className="flex flex-col">
                <p className=" font-semibold text-xl mt-[0.5]">
                  {currentRoom?.type === "group"
                    ? currentRoom?.name
                    : currentRoom?.members?.find(
                        (member: userType) => member._id !== currentUser._id
                      )?.name}
                </p>
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
                <Image
                  src={chatPerson}
                  className=" w-12 rounded-lg h-12"
                  alt=""
                />
                <div className="px-4 mb-2 radius-without-left-top max-w-[70%] py-2 bg-[#F5F6F7] text-[#333333]">
                  new message
                </div>
              </div>

              <div className="w-full flex flex-row gap-4">
                <div className="px-4 max-w-[70%] ms-16 mb-2 radius-without-left-top py-2 bg-[#F5F6F7] text-[#333333]">
                  Message contenet here
                </div>
              </div>
              <div className=" w-full flex flex-row  gap-4">
                <div className="px-4 max-w-[70%] radius-without-left-top ms-16 mb-2 py-2 bg-[#F5F6F7] text-[#333333]">
                  Message contenet here Message contenet here Message contenet
                  here Message contenet here Message contenet here Message
                  contenet here Message contenet here Message contenet here
                  Message contenet here Message contenet here Message contenet
                  here Message contenet here Message contenet here Message
                  contenet here
                </div>
              </div>
              <div className=" w-full mt-4 justify-start flex flex-row-reverse gap-4 items-start">
                <Image
                  src={chatPerson}
                  className=" w-12 rounded-lg h-12"
                  alt=""
                />
                <div className="px-4 h-10 max-w-[70%] radius-without-right-top py-2 bg-[#615EF0] text-[#FFFFFF]">
                  Message contenet here
                </div>
              </div>
              <div className=" w-full flex flex-row-reverse gap-4 items-start">
                <div className="px-4 max-w-[70%] radius-without-right-top me-16 mb-2 h-10 py-2 bg-[#615EF0] text-[#FFFFFF]">
                  Message contenet here
                </div>
              </div>
              <div className=" w-full flex flex-row-reverse gap-4 items-start">
                <div className="px-4 max-w-[70%] radius-without-right-top me-16 mb-2 py-2 bg-[#615EF0] text-[#FFFFFF]">
                  Message contenet here Message contenet here Message contenet
                  here Message contenet here Message contenet here Message
                  contenet here Message contenet here Message contenet here
                  Message contenet here Message contenet here Message contenet
                  here Message contenet here Message contenet here Message
                  contenet here
                </div>
              </div>
              <div className=" w-full flex flex-row-reverse gap-4 items-start">
                <div className="px-4 max-w-[70%] me-16 radius-without-right-top mb-2 py-2 bg-[#615EF0] text-[#FFFFFF]">
                  Message contenet here Message contenet here Message contenet
                  here Message contenet here Message contenet here Message
                  contenet here Message contenet here Message contenet here
                  Message contenet here Message contenet here Message contenet
                  here Message contenet here Message contenet here Message
                  contenet here
                </div>
              </div>
              <div className=" flex mt-4 flex-row items-start gap-4 w-full">
                <Image
                  src={chatPerson}
                  className=" w-12 rounded-lg h-12"
                  alt=""
                />
                <div className="px-4 mb-2 radius-without-left-top max-w-[70%] py-2 bg-[#F5F6F7] text-[#333333]">
                  Message contenet here
                </div>
              </div>
            </div>
            <div className=" h-[12%] w-full flex flex-row px-8 items-center gap-4 justify-start">
              <div className=" w-[4%]">
                <Image src={fileUploadIcon} className=" w-full h-6" alt="" />
              </div>
              <div className=" w-[95%] px-4 p-3 flex flex-row justify-between rounded-lg bg-white border-2 border-[#F5F6F7]">
                <input
                  value={newMessage}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newMessage.length > 0) {
                      handleSendMessage();
                    }
                  }}
                  onChange={(e) => setNewMessage(e.target.value)}
                  type="text"
                  className="w-[90%] focus:outline-none"
                />
                {newMessage?.length > 0 && (
                  <Image
                    onClick={handleSendMessage}
                    src={sendIcon}
                    alt=""
                    className="w-8 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center w-[80%] mx-auto h-full">
            <p>No chats to Show</p>
          </div>
        )}
      </div>
    </>
  );
}
