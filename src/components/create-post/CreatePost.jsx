import NavCreate from "./create-components/NavCreate";
import FormCreatePost from "./create-components/FormCreatePost";
import AsideInfo from "./create-components/AsideInfo";

export default function CreatePost() {
  return (
    <>
      <NavCreate />
      <main className=" px-4 pt-4 bg-[#f5f5f5] w-full ">
        <section className=" mx-[15%] min-h-[calc(100vh-72px)] grid grid-cols-[3.5fr_1.5fr] gap-4">
          <FormCreatePost />
          <AsideInfo />
        </section>
      </main>
    </>
  );
}
