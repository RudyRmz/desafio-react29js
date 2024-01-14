import NavBar from "../nav-bar/NavBar";
import AsideLPost from "./AsideLPost";
import AsideRPost from "./AsideRPost";
import PostMain from "./PostMain";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);
  //console.log(post.data.avatar);
  return (
    <>
      <NavBar />
      <main className=" px-4 pt-4 bg-[#f5f5f5] w-full ">
        <section className=" mx-[15%] min-h-[calc(100vh-72px)] grid grid-cols-[.4fr_3.5fr_1.5fr] gap-4 ">
          <AsideLPost />
          <PostMain />
          <AsideRPost user={post.data?.user} avatar={post.data?.avatar} />
        </section>
      </main>
    </>
  );
}
