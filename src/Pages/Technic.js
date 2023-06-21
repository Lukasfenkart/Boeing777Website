import Comparison from "../Components/Comparison";
import Inhalt from "../Components/Inhalt";
import Engines from "../Components/Engines";

function Technic() {
  return (
    <div>
      <div className="pt-5 pr-5 pl-5">
        <div className="p-10 pb-7 text-slate-50 bg-slate-800 rounded-t-2xl rounded-bl-2xl ">
          <div className="flex flex-row">
            <div className="w-[71%]">
              <h1 className="text-4xl pb-5 pr-0">
                Engineering/Tec - All Data about the 777X
              </h1>
            </div>
            <div className="">
              <h1 className="text-3xl">Technical Data: </h1>{" "}
              <p className="text-[16px]">on this page</p>
            </div>
          </div>
          <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-50 to-transparent opacity-25 dark:opacity-100" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-5/12">
          <img
            className="object-cover rounded-[2rem] p-5"
            src="./pictures/Boeing777x_tec1.jpg"
          ></img>
        </div>

        <div className="w-3/12">
          <img
            className="object-cover rounded-[2rem] p-5"
            src="./pictures/Boeing777x_tec2.jpg"
          ></img>
        </div>
        <Inhalt />
      </div>

      <div className="p-5 pt-1">
        <h1 className="text-[30px] pb-2 ">Measurement:</h1>
        <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />

        <div className="flex flex-row">
          <div className="w-3/4">
            <img
              className="object-cover rounded-[2rem] p-5"
              src="./pictures/mess2.png"
            ></img>
          </div>
          <div className="w-2/4">
            <img
              className="object-cover rounded-[2rem] p-5"
              src="./pictures/mess1.png"
            ></img>
          </div>
        </div>
      </div>
      <Comparison />

      <Engines />
    </div>
  );
}
export default Technic;
