import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { GetThreadPosts } from "../api/GetThreadPosts";

export const Thread = () => {
  const threadId = useParams().thread_id;
  console.log(threadId);

  GetThreadPosts(threadId).then((data) => {
    console.log(data);
  });
  return <Header />;
};
