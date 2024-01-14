export default function InfoUser({ name, avatar }) {
  return (
    <section className="info__user mt-3 bg-white rounded-lg">
      <div className=" border-t-[30px] border-[#010b1b] rounded-lg">
        <div className=" flex gap-3">
          <img src={avatar} className=" w-12 h-12 -mt-5 rounded-full ml-4" />
          <h5 className=" text-lg font-bold">{name}</h5>
        </div>
        <div className=" flex flex-col items-center pt-4 px-3">
          <button
            href="#"
            className=" bg-[#3b49df] font-semibold text-white rounded-lg p-2 w-full"
          >
            Following
          </button>
        </div>
        <div className=" px-3 py-3 flex flex-col gap-3">
          <p>software explorer</p>
          <div>
            <span className=" font-medium">WORK</span>
            <p>Web developer</p>
          </div>
          <div>
            <span className="font-medium">JOINED</span>
            <p>24 dic 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
}
