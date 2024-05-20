import axios from "axios";

export const PostNewThread = async (title) => {
  const apiUrl = "https://railway.bulletinboard.techtrain.dev/threads";
  await axios.post(apiUrl, {
    title: title,
  });
};
