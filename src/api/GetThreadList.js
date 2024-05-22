//import
import axios from "axios";

//APIのurl https://railway.bulletinboard.techtrain.dev/threads

export const GetThreadList = async (prop) => {
  console.log(prop.offset);
  const apiUrl = `https://railway.bulletinboard.techtrain.dev/threads?offset=20`;
  const apiRes = await axios.get(apiUrl);
  return apiRes.data;
};
