export default function ActiveDiscussions() {
  return (
    <section className=" ">
      <div className=" flex flex-col gap-3 py-3 px-2 bg-white border border-[#d4d4d4] rounded-lg divide-y">
        <div className=" font-bold text-lg">
          <h5>Active discussions</h5>
        </div>
        <ul className="divide-y ">
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Supercharge your application's performance: Consuming Symfony
              messenger messager with Go
            </a>
            <p className=" text-sm">31 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              🚀 Maximizing your IT system's potential: how to identify and
              resolve host performance and configuration issues
            </a>
            <p className=" text-sm">22 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Contenda Studio: Stretch your content futher
            </a>
            <p className=" text-sm">56 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              Lessons Learned from a Developer Incorporating AI
            </a>
            <p className=" text-sm">33 comments</p>
          </li>
          <li className=" py-3 ">
            <a className="link-underline-light text-dark" href="">
              DevOps with AWS Champion, Heather Luna
            </a>
            <p className=" text-sm">77 comments</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
