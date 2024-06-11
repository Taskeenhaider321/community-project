import React from "react";
import userIcon from "../../public/svgs/user.svg";
import { roomType, userType } from "@/types/basicTypes";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "@/types/stateTypes";
import Image from "next/image";
import { getRoomChats } from "@/API/chats";
import Cookies from "js-cookie";
import { selectRoom } from "@/redux/slices/roomsSlice";

const RoomBox = (props: { room: roomType }) => {
  const { room } = props;
  const dispatch = useDispatch()
  const currentUser = useSelector((state: stateType) => state.user);
  const getChats = async () => {
    dispatch(selectRoom(room))
    const chats = await getRoomChats(Cookies.get("userToken"), room?._id);
    console.log("chats recieved");
    console.log(chats);
  };
  return (
    <div
      onClick={getChats}
      className="p-2 m-2 cursor-pointer bg-[#EEF1FF] rounded-lg flex flex-row"
    >
      <div className=" w-1/5 p-1">
        <Image src={userIcon} alt="user" className="rounded-lg w-14" />
      </div>
      <div className="w-4/5 p-1">
        <div className="flex justify-between w-full font-semibold text-sm">
          <h4 className="mt-1 mb-[0.5] text-[#333333]">
            {room?.type === "group"
              ? room?.name
              : room?.members?.find(
                  (member: userType) => member._id !== currentUser._id
                )?.name}
          </h4>
          <p className=" text-gray-400">30m</p>
        </div>
        <p className="font-semibold text-sm text-[#8C8C8C]">Recent Message</p>
      </div>
    </div>
  );
};

export default RoomBox;
