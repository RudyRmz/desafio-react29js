import { useNavigate, useRouteError } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div className=" h-screen m-0 flex flex-col justify-center items-center gap-4">
      <img src="https://static.thenounproject.com/png/4440886-200.png" alt="" />
      <h3 className=" font-bold text-2xl">{error.status} Oops!</h3>
      <p className=" text-xl">{error.data}</p>
      <a
        className=" font-semibold border border-[#3b49df] text-[#3b49df] py-2 px-4 rounded-lg cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Home Page
      </a>
    </div>
  );
}
