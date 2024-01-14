import bold from "./../../../../assets/bold.svg";
import latina from "./../../../../assets/latina.svg";
import liga from "./../../../../assets/liga.svg";
import lista123 from "./../../../../assets/lista123.svg";
import listapunto from "./../../../../assets/listapunto.svg";
import h from "./../../../../assets/h.svg";
import comillas from "./../../../../assets/comillas.svg";
import imagen from "./../../../../assets/imagen.svg";

export default function FormMiddle() {
  return (
    <div className=" bg-[#f9f9f9] w-full h-14 flex items-center">
      <div className="flex justify-between my-2 mx-16">
        <div className=" flex gap-2">
          <img className=" p-2" src={bold} alt="" />
          <img className=" p-2" src={latina} alt="" />
          <img className=" p-2" src={liga} alt="" />
          <img className=" p-2" src={lista123} alt="" />
          <img className=" p-2" src={listapunto} alt="" />
          <img className=" p-2" src={h} alt="" />
          <img className=" p-2" src={comillas} alt="" />
          <img className=" p-2" src={imagen} alt="" />
        </div>
        {/* <div className=" flex">
          <img src="./src/assets/puntos.svg" alt="" />
        </div> */}
      </div>
    </div>
  );
}
