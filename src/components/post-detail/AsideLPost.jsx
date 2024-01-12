export default function AsideLPost() {
  return (
    <aside className=" flex flex-col items-center gap-1 pt-7">
      <button className=" p-2 w">
        <img src="./src/assets/corazon.svg" alt="" />
        <span>47</span>
      </button>
      <button className=" p-2">
        <img src="./src/assets/comments.svg" alt="" />
        <span>11</span>
      </button>
      <button className=" p-2">
        <img src="./src/assets/bookmark.svg" alt="" />
        <span>26</span>
      </button>
      <button className=" p-2 ">
        <img src="./src/assets/puntosH.svg" alt="" />
      </button>
    </aside>
  );
}
