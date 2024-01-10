import HomeLinks from "./asideL-components/homeLinks";
import OtherLinks from "./asideL-components/OtherLinks";
import SocialAside from "./asideL-components/SocialAside";
import TagsAside from "./asideL-components/TagsAside";
import DevCommunity from "./asideL-components/DevCommunity";
import FooterAside from "./asideL-components/FooterAside";

export default function LeftAsideHome() {
  return (
    <aside className=" border border-black flex flex-col gap-4">
      <HomeLinks />
      <OtherLinks />
      <SocialAside />
      <TagsAside />
      <DevCommunity />
      <FooterAside />
    </aside>
  );
}
