import LeftAsideHome from "./asideL/LeftAsideHome";
import RightAsideHome from "./asideR/RightAsideHome";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavBar from "../nav-bar/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=" px-4 pt-4 bg-[#f5f5f5] w-full ">
        <section className=" mx-[15%] min-h-[calc(100vh-72px)] grid grid-cols-[1.2fr_3.5fr_1.5fr] gap-4 ">
          <LeftAsideHome />
          <Outlet />
          <RightAsideHome />
        </section>
      </main>
    </>
  );
}
