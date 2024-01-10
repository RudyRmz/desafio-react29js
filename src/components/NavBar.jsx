export default function NavBar() {
  return (
    <nav className=" bg-white flex w-full justify-around items-center px-4 h-14 sticky">
      <div className=" flex items-center gap-5">
        <img
          className=" w-14"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
        <div className="flex  items-center">
          <input
            className=" border border-[#d4d4d4] w-96 h-10 p-2 rounded-l-lg"
            type="text"
            name=""
            id=""
            placeholder="Search..."
          />
          <button className=" h-10 border p-2 rounded-r-lg">
            <img src="./src/assets/search.svg" alt="" />
          </button>
        </div>
      </div>
      <div className=" flex items-center gap-3">
        <button className=" font-semibold border border-[#3b49df] text-[#3b49df] py-2 px-4 rounded-lg">
          Create Post
        </button>
        <img src="./src/assets/notification.svg" alt="" />
        <img
          className=" w-10 rounded-full"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--kPDUUZZY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1133362/a751b647-f244-49b6-9208-18e96c9a25d3.jpeg"
          alt=""
        />
      </div>
    </nav>
  );
}