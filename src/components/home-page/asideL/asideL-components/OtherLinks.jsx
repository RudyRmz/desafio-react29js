export default function OtherLinks() {
  return (
    <section>
      <h2 className=" font-bold pl-2">Other</h2>
      <ul className=" flex flex-col gap-3 pl-2">
        <li className=" flex items-center gap-1">
          <img src="./src/assets/code-of-conduct.svg" alt="" />
          <span>Code of Conduct</span>
        </li>
        <li className=" flex items-center gap-1">
          <img src="./src/assets/privacy-policy.svg" alt="" />
          <span>Privacy Policy</span>
        </li>
        <li className=" flex items-center gap-1">
          <img src="./src/assets/terms-of-use.svg" alt="" />
          <span>Terms of use</span>
        </li>
      </ul>
    </section>
  );
}
