import Vtop from "../Components/Variants-top";

function Variants() {
  return (
    <div>
      <div className="pt-5 pr-5 pl-5">
        <div className="p-10 pb-7 text-slate-50 bg-slate-800 rounded-t-2xl ">
          <h1 className="text-4xl pb-5">Variants - of the 777X</h1>
          <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-50 to-transparent opacity-25 dark:opacity-100" />
        </div>
      </div>
      <Vtop />

      <div className="p-5 flex flex-row">
        <div className="w-3/5">
          <img
            className="object-cover rounded-[2rem] p-2"
            src="./pictures/var7771.jpg"
          ></img>
        </div>
        <div className="w-2/5">
          <img
            className="object-cover rounded-[2rem] p-2"
            src="./pictures/var7772.jpg"
          ></img>
          <div className="flex flex-row p-3">
            <div className="w-1/3">
              <h1 className="text-2xl">Variant</h1>
              <hr></hr>
              <br />
              <div className="p-2 border-r-2">
                First Gen:
                <br />
                -777-200
                <br />
                -777-200er
                <br />
                -777-300
                <br />
                Second Gen:
                <br />
                -777-300er
                <br />
                -777-200lr
                <br />
                -777F
                <br />
                Newest Gen: <br />
                -777X-8
              </div>
            </div>
            <div className="w-1/3">
              <h1 className="text-2xl">First in service</h1>
              <hr></hr>
              <br />
              <div className="p-2 border-r-2">
                <br />
                -1995
                <br />
                -1997
                <br />
                -1998
                <br />
                <br />
                -2004
                <br />
                -2006
                <br />
                -2009
                <br />
                <br />
                -est. 2025
              </div>
            </div>
            <div className="w-1/3">
              <h1 className="text-2xl">Lauch customer</h1>
              <hr></hr>
              <br />
              <div className="p-2 border-r-2">
                <br />
                -UA United Airlines
                <br />
                -British Airways
                <br />
                -Cathay Pacific
                <br />
                <br />
                -Air France
                <br />
                -Pakistan Int. Airlines
                <br />
                -Air France
                <br />
                <br />
                -Lufthansa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Variants;
