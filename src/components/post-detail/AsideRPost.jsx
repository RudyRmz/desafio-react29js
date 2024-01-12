import InfoUser from "./components-post-detail/InfoUser";
import MoreUser from "./components-post-detail/MoreUser";

export default function AsideRPost() {
  return (
    <aside className=" flex flex-col gap-3">
      <InfoUser />
      <MoreUser />
    </aside>
  );
}
