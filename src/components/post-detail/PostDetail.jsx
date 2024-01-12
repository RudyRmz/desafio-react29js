import NavBar from "../NavBar";
import AsideLPost from "./AsideLPost";
import AsideRPost from "./AsideRPost";

export default function PostDetail() {
  return (
    <>
      <NavBar />
      <main className=" px-4 pt-4 bg-[#f5f5f5] w-full ">
        <section className=" mx-[15%] min-h-[calc(100vh-72px)] grid grid-cols-[.4fr_3.5fr_1.5fr] gap-4 ">
          <AsideLPost />
          <main className=" border border-black">Render Post</main>
          <AsideRPost />
        </section>
      </main>
    </>
  );
}
