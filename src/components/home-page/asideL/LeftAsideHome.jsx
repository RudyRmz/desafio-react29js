import OtherLinks from "./asideL-components/OtherLinks";
import SocialAside from "./asideL-components/SocialAside";
import TagsAside from "./asideL-components/TagsAside";
import DevCommunity from "./asideL-components/DevCommunity";
import FooterAside from "./asideL-components/FooterAside";
import LinksAside from "./asideL-components/LinksAside";

export default function LeftAsideHome() {
  return (
    <aside className="  flex flex-col gap-4">
      <LinksAside />
      <OtherLinks />
      <SocialAside />
      <TagsAside />
      <DevCommunity />
      <FooterAside />
    </aside>
  );
}
