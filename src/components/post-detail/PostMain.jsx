import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostHome({ img, date, reactions, title, tags }) {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3002/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  return (
    <article className=" border border-[#d4d4d4] bg-white rounded-lg overflow-hidden mb-2">
      <img className=" w-full max-h-70 " src={post.data?.url} alt="" />

      <div className=" p-5">
        <div className=" pl-10 flex flex-col gap-4">
          <div className=" flex items-center">
            <img
              className=" w-8 h-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/126934315?v=4"
              alt=""
            />
            <div className=" flex flex-col p-1">
              <span className=" font-semibold">Rudy Ramírez</span>
              <span>{post.data?.date}</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img src="../src/assets/heart.svg" alt="" />
            <img src="../src/assets/unicorn.svg" alt="" />
            <img src="../src/assets/exploding-head.svg" alt="" />
            <img src="../src/assets/raised-hands.svg" alt="" />
            <img src="../src/assets/fire.svg" alt="" />
          </div>
          <a className=" font-extrabold text-5xl">{post.data?.title}</a>
          <ul className=" flex">
            <li className=" py-1 px-2">#webdev</li>
            <li className=" py-1 px-2">#github</li>
            <li className=" py-1 px-2">#profile</li>
            <li className=" py-1 px-2">#tutorial</li>
          </ul>
          <p>{post.data?.description}</p>
        </div>
      </div>
    </article>
  );
}
