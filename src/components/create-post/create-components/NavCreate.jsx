export default function NavCreate() {
  return (
    <nav className=" bg-[#f5f5f5] flex w-full justify-around items-center px-4 h-14 sticky top-0 ">
      <div className=" flex items-center gap-3">
        <img
          className=" w-14"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
        />
        <p className=" font-semibold">Create Post</p>
      </div>
      <ul className=" flex gap-3">
        <li>
          <button>Edit</button>
        </li>
        <li>
          <button>Preview</button>
        </li>
      </ul>
    </nav>
  );
}
