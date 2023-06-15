function Engines(){
    return(
<div className="p-5">
        <h1 className="text-[30px] pb-2">Engines of 777X:</h1>
        <hr class="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-800 to-transparent opacity-25 dark:opacity-100" />
        <div className="flex felx-row">
          <div className="w-5/12">
            <img
              className="object-cover rounded-[2rem] p-3 "
              src="./pictures/777side.jpg"
            ></img>
          </div>
          <div className="p-3 text-2xl w-7/12">
            General Electrics
            <img
              className="object-cover rounded-[2rem] "
              src="./pictures/Eng1.jpg"
            ></img>
            <div className="flex flex-row p-2 text-base">
              <div>
                Engine Comparison:
                <img
                  className="object-cover rounded-[2rem] p-2 "
                  src="./pictures/comp1.jpg"
                ></img>
              </div>
              <div>
                GE9X vs. 737:
                <img
                  className="object-cover rounded-[2rem] p-2 "
                  src="./pictures/comp2.jpg"
                ></img>
              </div>
              <div>
                GE9X on Boeing 747:
                <img
                  className="object-cover rounded-[2rem] p-2 "
                  src="./pictures/comp3.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Engines;