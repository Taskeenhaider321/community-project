
import axios from "axios";
import { backendUrl } from "./constants";
import Cookies from "js-cookie";

export const getRooms = async () => {
    const userToken = Cookies.get('userToken');
    console.log(userToken);
    
  await axios
    .get(backendUrl + "/rooms", {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${userToken}`,
        },
      })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
        console.log('error in fetching');
        
    //   console.log(err);
    });
};
