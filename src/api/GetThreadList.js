//import
import axios from "axios";

//APIのurl https://railway.bulletinboard.techtrain.dev/threads

export const GetThreadList = async (prop) => {
  const offset = Number(prop ?? 0) * 10;
  const apiUrl = `https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`;
  const apiRes = await axios.get(apiUrl);
  return apiRes.data;
};
