import axios from "axios";

export const PostThreadPost = async (props) => {
  const API_URI = `https://railway.bulletinboard.techtrain.dev/threads/${props.threadId}/posts`;
  await axios.post(API_URI, {
    post: props.post,
  });
};
