function Comparison() {
  return (
    <div>
      <h1 className="text-[30px] p-5 pb-2">
        Comparison: 
        777X vs. previous Gen vs. competitor{" "}
      </h1>

      <div className="pl-5 pr-5 pb-5 font-medium ">
        <div className="flex flex-row ">
          <div className="w-1/3 p-3 border-r-2 bg-slate-300 text-lg rounded-l-2xl">
            Boeing 777X:
            <img
              className="object-cover rounded-[2rem] p-5 h-64"
              src="./pictures/b777x-8.jpg"
            ></img>
            <div className="flex flex-row">
              <div className="w-1/2 border-r-2 p-1.5 text-sm">
                777X-8: <br />
                -Price: 360,5 mio USD <br />
                -Seats: 384 <br /> <br />
                -Length: 69,8m <br />
                -Wingspan: 71,8m / 64,8m <br />
                -max Weight: 351t <br />
                -max Fuel: 197.977L <br /> <br />
                -Range: 16.090Km <br />
                -Engines: 2x GE9X <br />
                -Thrust: 470.000N
              </div>
              <div className="w-1/2 p-1.5 text-sm">
                777X-9: <br />
                -Price: 388,7 mio USD <br />
                -Seats: 414 <br /> <br />
                -Length: 76,7m <br />
                -Wingspan: 71,8m / 64,8m <br />
                -max Weight: 351t <br />
                -max Fuel: 197.977L <br /> <br />
                -Range: 13.940Km <br />
                -Engines: 2x GE9X <br />
                -Thrust: 470.000N
              </div>
            </div>
          </div>

          <div className="w-1/3 p-3 border-r-2 bg-slate-400 text-lg">
            Boeing 777:
            <img
              className="object-cover rounded-[2rem] p-5 h-64"
              src="./pictures/b777-200er.jpg"
            ></img>
            <div className="flex flex-row">
              <div className="w-1/2 border-r-2 p-1.5 text-sm">
                777-200er: <br />
                -Price: 306,6 mio USD <br />
                -Seats: 440 <br /> <br />
                -Length: 63,7m <br />
                -Wingspan: 60,9m <br />
                -max Weight: 297t <br />
                -max Fuel: 171.176L <br /> <br />
                -Range: 13.080Km <br />
                -Engines: 2x PW 4090RR <br />
                -Thrust: 400.000N
              </div>
              <div className="w-1/2 p-1.5 text-sm">
                777-300er: <br />
                -Price: 375,5 mio USD <br />
                -Seats: 550 <br /> <br />
                -Length: 73,9m <br />
                -Wingspan: 64,8m <br />
                -max Weight: 351t <br />
                -max Fuel: 181.283L <br /> <br />
                -Range: 13.649Km <br />
                -Engines: 2x GE90 <br />
                -Thrust: 514.000N
              </div>
            </div>
          </div>

          <div className="w-1/3 p-3 border-r-2 bg-slate-500  text-lg rounded-r-2xl">
            Airbus 350:
            <img
              className="object-cover rounded-[2rem] p-5 h-64"
              src="./pictures/A350-900.jpg"
            ></img>
            <div className="flex flex-row">
              <div className="w-1/2 border-r-2 p-1.5 text-sm">
                350-900: <br />
                -Price: 304,8 mio USD <br />
                -Seats: 314 <br /> <br />
                -Length: 66,9m <br />
                -Wingspan: 64,8m <br />
                -max Weight: 268t <br />
                -max Fuel: 138.000L <br /> <br />
                -Range: 15.000Km <br />
                -Engines: RR Trent XWB <br />
                -Thrust: 374.000N
              </div>
              <div className="w-1/2 p-1.5 text-sm">
                350-1000: <br />
                -Price: 351,9 mio USD <br />
                -Seats: 350 <br /> <br />
                -Length: 73,9m <br />
                -Wingspan: 64,8m <br />
                -max Weight: 308t <br />
                -max Fuel: 156.000L <br /> <br />
                -Range: 15.600Km <br />
                -Engines: RR Trent XWB <br />
                -Thrust: 432.000N
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comparison;
