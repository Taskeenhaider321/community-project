"use server";
import axios from "axios";
import { backendUrl } from "../constants";
import { userType } from "../types/basicTypes";

export const getAllUsers = async (userToken: string | undefined) => {
  console.log("getting Users");

  const response = await axios
    .get(backendUrl + "/users/all", {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("error in fetching");
      console.log(err);

      //   console.log(err);
    });
  return response;
};
