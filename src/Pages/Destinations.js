import ApiRequest from "../Components/ApiRequest";
import Request from "../Components/request";

function Destinations() {
    return(
    <div className="p-5">
        <div className="p-10 pb-7 text-slate-50 bg-slate-800 rounded-t-2xl ">
        <h1 className="text-4xl pb-5">Live Flights</h1>
        </div>
        <div className="">
            <ApiRequest />
        </div>
    </div>
    );
}
export default Destinations;