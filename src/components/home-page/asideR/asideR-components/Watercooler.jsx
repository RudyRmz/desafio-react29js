export default function Watercooler() {
  return (
    <section className=" ">
      <div className=" flex flex-col gap-3 py-3 px-2 bg-white border border-[#d4d4d4] rounded-lg divide-y">
        <div className=" font-bold text-lg">
          <h5>#watercooler</h5>
        </div>
        <ul className="divide-y ">
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Caption This!🤔💭
            </a>
            <p className=" text-sm">31 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Which Tech Trends Missed the Mark
            </a>
            <p className=" text-sm">22 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Rubyist Hangout Thread
            </a>
            <p className=" text-sm">56 comments</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
