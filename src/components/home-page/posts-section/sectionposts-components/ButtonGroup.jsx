import { useNavigate } from "react-router-dom";

export default function ButtonGroup({ route }) {
  const navigate = useNavigate();

  return (
    <div className=" flex text-lg">
      <button
        className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#3b49df]"
        onClick={() => {
          navigate("/");
        }}
      >
        <p className={route === "relevant" ? `font-bold` : ` font-normal`}>
          Relevant
        </p>
      </button>
      <button
        className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#3b49df]"
        onClick={() => {
          navigate("/latest");
        }}
      >
        <p className={route === "latest" ? `font-bold` : ` font-normal`}>
          Latest
        </p>
      </button>
      <button
        className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#3b49df]"
        onClick={() => {
          navigate("/top");
        }}
      >
        <p className={route === "top" ? `font-bold` : ` font-normal`}>Top</p>
      </button>
    </div>
  );
}
