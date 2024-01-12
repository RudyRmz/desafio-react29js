export default function PostHome({ img, date, reactions, title, tags }) {
  return (
    <article className=" border border-[#d4d4d4] bg-white rounded-lg overflow-hidden mb-2">
      <img
        className=" w-full max-h-70 "
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--Od9q7cMD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gmzcz1whq2wb5e2ghnrc.jpg"
        alt=""
      />

      <div className=" p-5">
        <div className=" pl-10 flex flex-col gap-4">
          <div className=" flex items-center">
            <img
              className=" w-8 h-8 rounded-full"
              src="https://avatars.githubusercontent.com/u/126934315?v=4"
              alt=""
            />
            <div className=" flex flex-col p-1">
              <span className=" font-semibold">Rudy Ramírez</span>
              <span>12/01/2024</span>
            </div>
          </div>
          <div className=" flex gap-4">
            <img src="./src/assets/heart.svg" alt="" />
            <img src="./src/assets/unicorn.svg" alt="" />
            <img src="./src/assets/exploding-head.svg" alt="" />
            <img src="./src/assets/raised-hands.svg" alt="" />
            <img src="./src/assets/fire.svg" alt="" />
          </div>
          <a className=" font-extrabold text-5xl">
            How to get started with Progressive Web Apps.
          </a>
          <ul className=" flex">
            <li className=" py-1 px-2">#webdev</li>
            <li className=" py-1 px-2">#github</li>
            <li className=" py-1 px-2">#profile</li>
            <li className=" py-1 px-2">#tutorial</li>
          </ul>
          <p>
            What is a Progressive Web App (PWA)? PWA is a progressive web app
            and it combines the features of an app with the technology of the
            web. You can say they are apps built with web technologies but feel
            and function like native apps. Introduction to PWA Web applications
            were seemingly becoming limited as most people preferred building
            mobile apps that users could keep on their phones to building web
            apps because you have to keep going to the browser. However, with
            the advent of PWA, this has not been covered but there is a lot of
            progress with this. Web technologies I mean HTML, CSS, JavaScript.
            PWA’s can be installed on your home screen, they can work offline
            from where you last left and offer a comparable experience and
            feature to their native apps.
          </p>
        </div>
      </div>
    </article>
  );
}
