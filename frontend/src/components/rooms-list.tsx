"use client";

import Image from "next/image";
import chatPerson from "../../public/images/chat-person.jpg";
import { useEffect, useState } from "react";
import { getRooms } from "@/API/rooms";
import AddPersonalRoom from "./add-personal-room";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { updateRooms } from "@/redux/slices/roomsSlice";
import { roomType, userType } from "@/types/basicTypes";
import { stateType } from "@/types/stateTypes";
import SkeletonLoader from "./skeletonLoader";
import RoomBox from "./roomBox";

export default function RoomsList() {
  const [loading, setLoading] = useState(true);
  const allRooms = useSelector((state: stateType) => state.rooms);
  const dispatch = useDispatch();
  const currentUser = useSelector((state: stateType) => state.user);

  const fetchRooms = async () => {
    setLoading(true);
    console.log("calling rooms");
    const newRooms = await getRooms(Cookies.get("userToken"));
    console.log("new rooms");
    console.log(newRooms);
    dispatch(updateRooms(newRooms));
    setLoading(false);
  };

  useEffect(() => {
    if (allRooms?.length === 0) {
      fetchRooms();
    }
  });

  return (
    <>
      <div className="ps-4 pe-2 py-2 w-full h-[68%] overflow-y-scroll">
        {/* Single Chat Person Box  */}
        {loading ? (
          <SkeletonLoader />
        ) : (
          <>
            {allRooms?.map((room: roomType) => {
              return (
                <>
                  <RoomBox room={room} />
                </>
              );
            })}
          </>
        )}
      </div>
      <AddPersonalRoom />
    </>
  );
}
