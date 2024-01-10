export default function Discuss() {
  return (
    <section className=" ">
      <div className=" flex flex-col gap-3 py-3 px-2 bg-white border border-[#d4d4d4] rounded-lg divide-y">
        <div className=" font-bold text-lg">
          <h5>#discuss</h5>
        </div>
        <ul className="divide-y ">
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Coding Habitat: Where Do You Thrive Best?
            </a>
            <p className=" text-sm">31 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Mondey—What are you listening to? (Chill Edition II)
            </a>
            <p className=" text-sm">22 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Embarking on a journey: Joining the Dev Community
            </a>
            <p className=" text-sm">56 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              What are Challengers do you face in Writing Technical Articles?
            </a>
            <p className=" text-sm">33 comments</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
