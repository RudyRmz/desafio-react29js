export default function PostHome() {
  return (
    <article className=" border border-[#d4d4d4] bg-white rounded-lg overflow-hidden">
      <img
        className=" w-full max-h-64 "
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--F6jCmbz_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zbyro9f39xdeowboserg.png"
        alt=""
      />

      <div className=" p-5">
        <div className=" flex items-center">
          <img
            className=" w-8 h-8 rounded-full"
            src="https://avatars.githubusercontent.com/u/126934315?v=4"
            alt=""
          />
          <div className=" flex flex-col p-1">
            <span className=" font-semibold">Rudy Ramírez</span>
            <span>10 Ene 2024</span>
          </div>
        </div>
        <div className=" pl-10 flex flex-col gap-4">
          <a className=" font-bold text-4xl">
            How to Make Your Awesome GitHub Profile
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
                <img src="./src/assets/heart.svg" alt="" />
                <img src="./src/assets/unicorn.svg" alt="" />
                <img src="./src/assets/exploding-head.svg" alt="" />
                <img src="./src/assets/raised-hands.svg" alt="" />
                <img src="./src/assets/fire.svg" alt="" />
                <p className=" pl-1">251 reactions</p>
              </div>
              <div className=" flex items-center">
                <img src="./src/assets/comments.svg" alt="" />
                <p>2 comments</p>
              </div>
            </div>
            <div className=" flex items-center">
              <p>10 min read</p>
              <img src="./src/assets/bookmark.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
