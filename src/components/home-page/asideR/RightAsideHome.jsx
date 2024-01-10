import ActiveDiscussions from "./asideR-components/ActiveDiscussions";
import Discuss from "./asideR-components/Discuss";
import Watercooler from "./asideR-components/Watercooler";

export default function RightAsideHome() {
  return (
    <aside className=" flex flex-col gap-3">
      <ActiveDiscussions />
      <Discuss />
      <Watercooler />
    </aside>
  );
}
