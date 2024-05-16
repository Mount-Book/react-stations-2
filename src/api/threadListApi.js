//import
import axios from "axios";

//APIのurl https://railway.bulletinboard.techtrain.dev/threads

export const ThreadListApi = async () => {
  const apiUrl = "https://railway.bulletinboard.techtrain.dev/threads";
  const apiRes = await axios.get(apiUrl);
  return apiRes.data;
};
