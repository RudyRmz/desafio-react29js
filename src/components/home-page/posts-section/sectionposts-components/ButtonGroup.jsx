export default function ButtonGroup() {
  return (
    <div className=" flex text-lg">
      <button className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#3b49df]">
        <p className=" font-bold">Relevant</p>
      </button>
      <button className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#3b49df]">
        <p>Latest</p>
      </button>
      <button className="py-2 px-3 rounded-lg hover:bg-white hover:text-[#3b49df]">
        <p>Top</p>
      </button>
    </div>
  );
}
