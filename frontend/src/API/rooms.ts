"use server";
import axios from "axios";
import { backendUrl } from "../constants";

export const getRooms = async (userToken: string | undefined) => {
  console.log("getting rooms");
  console.log(userToken);

    const result = await axios
      .get(backendUrl + "/rooms", {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("error in fetching rooms");
        console.log(err);

        //   console.log(err);
      });

    return result;
};

export const createRoomAPI = async (
  userToken: string | undefined,
  members: (string | undefined)[],
  type: string,
  name?: string
) => {
  console.log("creating Room");
  console.log(userToken);
  const data =
    type === "personal"
      ? { name: null, members, type }
      : { name, members, type };

  const response = await axios
    .post(backendUrl + "/rooms", data, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((res) => {
      console.log("room created");
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("error in creating room");
      console.log(err.response);

      //   console.log(err);
    });
  return response;
};
