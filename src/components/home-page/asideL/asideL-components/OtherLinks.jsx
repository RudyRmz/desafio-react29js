import conduct from "./../../../../assets/code-of-conduct.svg";
import privacy from "./../../../../assets/privacy-policy.svg";
import terms from "./../../../../assets/terms-of-use.svg";

export default function OtherLinks() {
  return (
    <section>
      <h2 className=" font-bold pl-2">Other</h2>
      <ul className=" flex flex-col gap-3 pl-2">
        <li className=" flex items-center gap-1">
          <img src={conduct} alt="" />
          <span>Code of Conduct</span>
        </li>
        <li className=" flex items-center gap-1">
          <img src={privacy} alt="" />
          <span>Privacy Policy</span>
        </li>
        <li className=" flex items-center gap-1">
          <img src={terms} alt="" />
          <span>Terms of use</span>
        </li>
      </ul>
    </section>
  );
}
