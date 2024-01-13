import homeIcon from "./../../../../assets/home.svg";

export default function LinksAside() {
  return (
    <ul className=" flex flex-col gap-3 pl-2">
      <li className=" flex items-center gap-1">
        <img src={homeIcon} alt="" />
        <span>Home</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/listings.svg" alt="" />
        <span>Listings</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/podcasts.svg" alt="" />
        <span>Podcast</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/videos.svg" alt="" />
        <span>Videos</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/tags.svg" alt="" />
        <span>Tags</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/faq.svg" alt="" />
        <span>FAQ</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/forem-shop.svg" alt="" />
        <span>Forem Shop</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/advertise-on-dev.svg" alt="" />
        <span>Advertise on DEV</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/about.svg" alt="" />
        <span>About</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/contact.svg" alt="" />
        <span>Contact</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/guides.svg" alt="" />
        <span>Guides</span>
      </li>
      <li className=" flex items-center gap-1">
        <img src="./src/assets/software-comparisons.svg" alt="" />
        <span>Software comparisons</span>
      </li>
    </ul>
  );
}
