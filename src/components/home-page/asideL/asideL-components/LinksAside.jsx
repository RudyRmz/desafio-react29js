import homeIcon from "./../../../../assets/home.svg";
import listings from "./../../../../assets/listings.svg";
import podcasts from "./../../../../assets/podcasts.svg";
import videos from "./../../../../assets/videos.svg";
import tags from "./../../../../assets/tags.svg";
import faq from "./../../../../assets/faq.svg";
import foremShop from "./../../../../assets/forem-shop.svg";
import advertise from "./../../../../assets/advertise-on-dev.svg";
import about from "./../../../../assets/about.svg";
import contact from "./../../../../assets/contact.svg";
import guides from "./../../../../assets/guides.svg";
import software from "./../../../../assets/software-comparisons.svg";

import PopOver from "../../../nav-bar/PopOver";

export default function LinksAside() {
  return (
    <ul className=" flex flex-col gap-3 pl-2">
      <li className=" flex items-center gap-1">
        <img src={homeIcon} alt="" />
        <span>Home</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={listings} alt="" />
        <span>Listings</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={podcasts} alt="" />
        <span>Podcast</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={videos} alt="" />
        <span>Videos</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={tags} alt="" />
        <span>Tags</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={faq} alt="" />
        <span>FAQ</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={foremShop} alt="" />
        <span>Forem Shop</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={advertise} alt="" />
        <span>Advertise on DEV</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={about} alt="" />
        <span>About</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={contact} alt="" />
        <span>Contact</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={guides} alt="" />
        <span>Guides</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src={software} alt="" />
        <span>Software comparisons</span>
      </li>
    </ul>
  );
}
