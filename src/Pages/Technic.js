import Inhalt from "../Components/Inhalt";

function Technic() {
  return (
    <div>
      <div className="pt-5 pr-5 pl-5">
        <div className="p-10 pb-7 text-slate-50 bg-slate-800 rounded-t-2xl rounded-bl-2xl ">
          <h1 className="text-4xl pb-5">
            Engineering/Tec - All Data about the 777X
          </h1>
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

      <div className="p-5">
        <h1 className="text-[30px] pb-2">Measurement:</h1>
        <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />

        <div className="flex flex-row">
          <div className>
            <img
              className="object-cover rounded-[2rem] p-5"
              src="./pictures/mess2.png"
            ></img>
          </div>
          <div>
            <img
              className="object-cover rounded-[2rem] p-5"
              src="./pictures/mess1.png"
            ></img>
          </div>
        </div>
      </div>

      <div className="p-5">
        <h1 className="text-[30px] pb-2">Comparison: 777X vs The World </h1>
        <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />
        <div className="flex flex-row">
            <div className="w-1/4 p-3 border-r-2">
            Boeing 777X: <br />
            -Length 
            777X-8 
            777X-9 71.5m
            </div>
            <div className="w-1/4 p-3 border-r-2">
            Boeing 777-200er:
            </div>
            <div className="w-1/4 p-3 border-r-2">
            Airbus 350-1000:
                
            </div>
            <div className="w-1/4 p-3">
            Boeing 747-8i:
            </div>

        </div>

      </div>
    </div>
  );
}
export default Technic;

