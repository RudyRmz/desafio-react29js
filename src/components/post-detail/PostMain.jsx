import heart from "./../../assets/heart.svg";
import unicorn from "./../../assets/unicorn.svg";
import exploding from "./../../assets/exploding-head.svg";
import hands from "./../../assets/raised-hands.svg";
import fire from "./../../assets/fire.svg";

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

  //console.log(post);

  return (
    <article className=" border border-[#d4d4d4] bg-white rounded-lg overflow-hidden mb-2">
      <img className=" w-full max-h-70 " src={post.data?.url} alt="" />

      <div className=" p-5">
        <div className=" pl-10 flex flex-col gap-4">
          <div className=" flex items-center">
            <img
              className=" w-8 h-8 rounded-full"
              src={post.data?.avatar}
              alt=""
            />
            <div className=" flex flex-col p-1">
              <span className=" font-semibold">{post.data?.user}</span>
              <span>{post.data?.date}</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img src={heart} alt="" />
            <img src={unicorn} alt="" />
            <img src={exploding} alt="" />
            <img src={hands} alt="" />
            <img src={fire} alt="" />
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
