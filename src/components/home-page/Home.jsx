import LeftAsideHome from "./asideL/LeftAsideHome";
import RightAsideHome from "./asideR/RightAsideHome";
import SectionPost from "./posts-section/SectionPost";

export default function Home() {
  return (
    <main className=" px-4 pt-4 bg-[#f5f5f5] w-full ">
      <section className=" mx-[15%] min-h-[calc(100vh-72px)] grid grid-cols-[1.2fr_3.5fr_1.5fr] gap-4 ">
        <LeftAsideHome />
        <SectionPost />
        <RightAsideHome />
      </section>
    </main>
  );
}
