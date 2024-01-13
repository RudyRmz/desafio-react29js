import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//console.log(payloadObject);

export default function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const tokenObjet = () => {
    if (token) {
      const [encodedHeader, encodedPayload, encodedSignature] =
        token.split(".");
      const decodedPayload = atob(encodedPayload);
      const payloadObject = JSON.parse(decodedPayload);
      return payloadObject;
    }
  };

  //console.log(tokenObjet().avatar);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };

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
          src={tokenObjet()?.avatar}
          alt=""
        />
      </div>
    </nav>
  );
}
