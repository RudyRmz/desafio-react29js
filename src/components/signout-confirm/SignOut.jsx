import NavBar from "../nav-bar/NavBar";
import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <NavBar />
      <main className=" mx-[15%] min-h-[calc(100vh-72px)] m-0 flex items-center justify-center">
        <section className=" flex flex-col items-center justify-center max-w-[600px] gap-4">
          <h1 className=" font-bold text-3xl">
            Are you sure you want to sign out?
          </h1>
          <button
            onClick={() => {
              logout();
            }}
            className=" bg-[#3b49df] text-white font-semibold p-3 rounded-md"
          >
            Yes, sign out
          </button>
        </section>
      </main>
    </>
  );
}
