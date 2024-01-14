import twitter from "./../../../../assets/twitter-black.svg";
import github from "./../../../../assets/github.svg";
import facebook from "./../../../../assets/facebook.svg";
import instagram from "./../../../../assets/instagram.svg";
import twitch from "./../../../../assets/twitch.svg";
import foostodon from "./../../../../assets/foostodon.svg";

export default function SocialAside() {
  return (
    <section className=" flex px-2 gap-2 justify-between">
      <img className=" w-6" src={twitter} alt="" />
      <img className=" w-6" src={facebook} alt="" />
      <img className=" w-6" src={github} alt="" />
      <img className=" w-6" src={instagram} alt="" />
      <img className=" w-6" src={twitch} alt="" />
      <img className=" w-6" src={foostodon} alt="" />
    </section>
  );
}
