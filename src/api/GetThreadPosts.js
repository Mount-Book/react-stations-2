import axios from "axios";

export const GetThreadPosts = async (threadId) => {
  const API_URI = `https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`;
  const apiRes = await axios.get(API_URI);

  return apiRes.data;
};
