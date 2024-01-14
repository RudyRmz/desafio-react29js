import bookmark from "./../../assets/bookmark.svg";
import comments from "./../../assets/comments.svg";
import corazon from "./../../assets/corazon.svg";

export default function AsideLPost() {
  return (
    <aside className=" flex flex-col items-center gap-1 pt-7">
      <button className=" p-2 w">
        <img src={corazon} alt="" />
        <span>47</span>
      </button>
      <button className=" p-2">
        <img src={comments} alt="" />
        <span>11</span>
      </button>
      <button className=" p-2">
        <img src={bookmark} alt="" />
        <span>26</span>
      </button>
      <button className=" p-2 ">
        <img src="../src/assets/puntosH.svg" alt="" />
      </button>
    </aside>
  );
}
