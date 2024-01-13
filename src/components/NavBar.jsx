import { Link, Outlet, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };
  const token = localStorage.getItem("token");

  return (
    <nav className=" bg-white border border-b-[#cfd2d5] flex w-full justify-around items-center px-4 h-14 sticky top-0 ">
      <div className=" flex items-center gap-5">
        <img
          className=" w-14"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
        <div className="flex  items-center">
          <input
            className=" border border-[#d4d4d4] w-96 h-10 p-2 rounded-l-lg outline-[#3b49df]"
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
        <button
          onClick={() => {
            navigate("/login");
          }}
          className={token ? `hidden` : ` `}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/new");
          }}
          className={`font-semibold border border-[#3b49df] text-[#3b49df] py-2 px-4 rounded-lg ${
            token ? `hidden` : ` `
          }`}
        >
          Create account
        </button>
        <button
          onClick={() => {
            navigate("/new");
          }}
          className={`${
            token ? "" : "hidden"
          } font-semibold border border-[#3b49df] text-[#3b49df] py-2 px-4 rounded-lg`}
        >
          Create Post
        </button>
        <img
          className={token ? "" : "hidden"}
          src="./src/assets/notification.svg"
          alt=""
        />
        <img
          className={`${token ? "" : "hidden"} w-10 rounded-full`}
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--kPDUUZZY--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1133362/a751b647-f244-49b6-9208-18e96c9a25d3.jpeg"
          alt=""
        />
      </div>
    </nav>
  );
}
