import heart from "./../../../../assets/heart.svg";
import unicorn from "./../../../../assets/unicorn.svg";
import exploding from "./../../../../assets/exploding-head.svg";
import hands from "./../../../../assets/raised-hands.svg";
import fire from "./../../../../assets/fire.svg";
import comments from "./../../../../assets/comments.svg";
import bookmark from "./../../../../assets/bookmark.svg";

export default function PostHome({
  img,
  date,
  reactions,
  title,
  tags,
  onEventClick,
  id,
  name,
  avatar,
}) {
  const handleSeePost = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
    //console.log("diste click al boton");
  };
  return (
    <article className=" border border-[#d4d4d4] bg-white rounded-lg overflow-hidden mb-2">
      <img className=" w-full max-h-64 " src={img} alt="" />

      <div className=" p-5">
        <div className=" flex items-center">
          <img className=" w-8 h-8 rounded-full" src={avatar} alt="" />
          <div className=" flex flex-col p-1">
            <span className=" font-semibold">{name}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className=" pl-10 flex flex-col gap-4">
          <a
            className=" font-bold text-4xl cursor-pointer"
            onClick={handleSeePost}
          >
            {title}
          </a>
          <ul className=" flex">
            <li className=" py-1 px-2">#webdev</li>
            <li className=" py-1 px-2">#github</li>
            <li className=" py-1 px-2">#profile</li>
            <li className=" py-1 px-2">#tutorial</li>
          </ul>
          <div className=" flex justify-between">
            <div className=" flex gap-2">
              <div className=" flex ">
                <img src={heart} alt="" />
                <img src={unicorn} alt="" />
                <img src={exploding} alt="" />
                <img src={hands} alt="" />
                <img src={fire} alt="" />
                <p className=" pl-1">{`${reactions} reactions`}</p>
              </div>
              <div className=" flex items-center">
                <img src={comments} alt="" />
                <p>2 comments</p>
              </div>
            </div>
            <div className=" flex items-center">
              <p>10 min read</p>
              <img src={bookmark} alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
