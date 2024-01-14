import InfoUser from "./components-post-detail/InfoUser";
import MoreUser from "./components-post-detail/MoreUser";

export default function AsideRPost({ user, avatar }) {
  return (
    <aside className=" flex flex-col gap-3">
      <InfoUser name={user} avatar={avatar} />
      <MoreUser name={user} />
    </aside>
  );
}
